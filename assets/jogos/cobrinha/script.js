const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Parâmetros da bola
        let ballRadius = 10;
        let x = canvas.width / 2;
        let y = canvas.height - 30;
        let dx = 2; // Velocidade horizontal
        let dy = -2; // Velocidade vertical

        // Função para desenhar a bola
        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        // Função para atualizar o canvas
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();

            // Detectar colisão com as bordas do canvas
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
                dy = -dy;
            }

            // Atualizar a posição da bola
            x += dx;
            y += dy;
        }

        // Chamar a função draw a cada 10ms para animar a bola
        setInterval(draw, 10);