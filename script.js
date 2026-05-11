const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');

        let fontSize = 14;
        let columns = 0;
        let drops = [];

        function initMatrix() {
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            columns = Math.floor(canvas.width / fontSize) + 2;
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }
        }

        window.addEventListener('resize', initMatrix);
        initMatrix();

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00FF41";
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#00FF41";
            ctx.font = "900 " + fontSize + "px monospace";

            for (let i = 0; i < columns; i++) {
                const text = Math.random() > 0.5 ? "1" : "0";
                const x = (i - 0.5) * fontSize;
                const y = drops[i] * fontSize;
                ctx.fillText(text, x, y);
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            ctx.shadowBlur = 0;
        }

        setInterval(draw, 35);

                function viewCert(url, title) {
            Swal.fire({
            title: `<span class="cyber-title" style="font-size: 0.9em">${title}</span>`,
            imageUrl: url,
            imageWidth: '100%', 
            background: '#0a0a0a',
            showConfirmButton: false,
            showCloseButton: true,
            customClass: {
                popup: 'cyber-popup-large'
            }
        });
        }

