import React, { useState } from "react";
import styles from "./MagnetGame.module.css";

export function MagnetGame() {
    const [isSnapped, setIsSnapped] = useState(false);
    const [gameArea] = useState({
        width: 500,
        height: 200,
        magnetWidth: 40,
        leftMagnetStart: 0,
        rightMagnetStart: 460,
        snapDistance: 100,
        snapSpeed: 0.2,
    });
    const [leftMagnetLeft, setLeftMagnetLeft] = useState(gameArea.leftMagnetStart);
    const [rightMagnetLeft, setRightMagnetLeft] = useState(gameArea.rightMagnetStart);


    function reset() {
        setIsSnapped(false);
        setLeftMagnetLeft(gameArea.leftMagnetStart);
        setRightMagnetLeft(gameArea.rightMagnetStart);
    }

    function snapMagnets(isLeft: boolean, newLeft: number, newRight: number) {
        setIsSnapped(true);
        if (isLeft) {
            setLeftMagnetLeft(newRight - gameArea.magnetWidth);
        } else {
            setRightMagnetLeft(newLeft + gameArea.magnetWidth);
        }
    }

    // Simple collision detection
    function checkSnap(newLeft: number, newRight: number, isLeft: boolean) {
        const distance = newRight - (newLeft + gameArea.magnetWidth);
        if (distance < gameArea.snapDistance) {
            snapMagnets(isLeft, newLeft, newRight);
        } else {
            setIsSnapped(false);
        }
    }

    function handleDrag(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        isLeft: boolean
    ) {
        if (isSnapped) return;

        const startX = e.clientX;
        const startLeft = isLeft ? leftMagnetLeft : rightMagnetLeft;

        function onMouseMove(ev: MouseEvent) {
            const dx = ev.clientX - startX;
            if (isLeft) {
                let newLeft = Math.max(
                    0,
                    Math.min(startLeft + dx, rightMagnetLeft - gameArea.magnetWidth)
                );
                setLeftMagnetLeft(newLeft);
                checkSnap(newLeft, rightMagnetLeft, true);
            } else {
                let newRight = Math.max(
                    leftMagnetLeft + gameArea.magnetWidth,
                    Math.min(startLeft + dx, gameArea.width - gameArea.magnetWidth)
                );
                setRightMagnetLeft(newRight);
                checkSnap(leftMagnetLeft, newRight, true);
            }
        }

        function onMouseUp() {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    }



    return (
        <div
            className={styles.gameArea}
            style={{
                width: `${gameArea.width}px`,
                height: `${gameArea.height}px`,
            }}
        >
            <div
                className={styles.magnet}
                onMouseDown={(e) => handleDrag(e, true)}
                style={{
                    width: `${gameArea.magnetWidth}px`,
                    left: `${leftMagnetLeft}px`,
                    transition: isSnapped ? "left 0.2s" : undefined,
                }}
            >
                🧲
            </div>
            <div
                className={styles.magnet}
                onMouseDown={(e) => handleDrag(e, false)}
                style={{
                    width: `${gameArea.magnetWidth}`,
                    left: `${rightMagnetLeft}px`,
                    transition: isSnapped ? "left 0.2s" : undefined,
                }}
            >
                🧲
            </div>
            {isSnapped && (
                <div className={styles.snapText}>
                    Magnets snapped together!{" "}
                    <button onClick={reset}>Reset</button>
                </div>
            )}
            <div className={styles.instructions}>
                Drag the magnets together. When they get close, they'll snap!
            </div>
        </div>
    );
}
