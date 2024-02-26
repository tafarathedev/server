class Ball {
    constructor(h, bounce, window) {
        this.h = h;
        this.bounce = bounce;
        this.window = window;
    }

    countPasses() {
        const { h, bounce, window } = this;
        return (
            h <= 0 || bounce <= 0 || bounce >= 1 || window >= h ? -1 :
            (() => {
                let passes = 0;
                while (h > window) {
                    passes++; // Ball passes the window while falling
                    h *= bounce; // Height after the bounce
                    if (h > window) {
                        passes++; // Ball passes the window after bouncing
                    }
                }
                return passes > 0 ? passes : -1;
            })()
        );
    }
}

// Example usage:
const ball1 = new Ball(3, 0.66, 1.5);
console.log(ball1.countPasses()); // Output should be 3

const ball2 = new Ball(3, 1, 1.5);
console.log(ball2.countPasses()); // Output should be -1
