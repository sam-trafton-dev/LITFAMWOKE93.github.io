class WeldingAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.sparks = [];
        this.sparkCount = 50;
        this.sparkLife = 30;
        this.gravity = 0.2;
        this.sparkGenerationInterval = this.getRandomInterval(70, 110);
        this.flashOpacity = 0;
        this.frameCounter = 0;
    }

    getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateSparks() {
        // TODO: Create another function for continous welding look versus spot welding look
        this.triggerFlash();
        for (let i = 0; i < this.sparkCount; i++) {
            this.sparks.push({
                x: 200, // Welder position
                y: 200,
                vx: Math.random() * 2, // Velocity X, always to the right
                vy: (Math.random() - 0.5) * 2 - 1, // Velocity Y
                life: this.sparkLife,
            });
        }
    }

    triggerFlash() {
        this.flashOpacity = 1;
    }

    drawFlash() {
        if (this.flashOpacity > 0) {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${this.flashOpacity})`;
            this.ctx.beginPath();
            this.ctx.arc(200, 200, 30, 0, 2 * Math.PI); 
            this.ctx.fill();
            this.flashOpacity -= 0.05;
        }
    }

    drawWelder() {
        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(190, 180, 20, 40); // Welder body
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(195, 185, 10, 10); // Welding hood
        this.ctx.fillStyle = '#0047AB'; 
        this.ctx.fillRect(210, 200, 20, 5); // Welding gun
    }

    drawSparks() {
        this.sparks.forEach((spark, index) => {
            spark.x += spark.vx;
            spark.y += spark.vy;
            spark.vy += this.gravity; 
            spark.life--;

            // Draw spark
            this.ctx.fillStyle = `rgba(255, 165, 0, ${spark.life / this.sparkLife})`; 
            this.ctx.fillRect(spark.x, spark.y, 2, 2);

            // Remove dead sparks
            if (spark.life <= 0) {
                this.sparks.splice(index, 1);
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawWelder();
        this.drawFlash();
        this.drawSparks();

        // Creates interval spacing so the sparks are not drawn on a repeating interval
        this.frameCounter++;

        // Check if it's time to generate more sparks
        if (this.frameCounter >= this.sparkGenerationInterval) {
            this.generateSparks();
            this.frameCounter = 0;
            this.sparkGenerationInterval = this.getRandomInterval(70, 110);
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    start() {
        this.animate();
    }
}