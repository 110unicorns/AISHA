Last login: Thu Jun 18 01:32:13 on ttys001
--- BIENVENIDO AL DISTRITO 110: MODO CREATIVO ACTIVADO ---
DALILA/	J02/	LAIA/	SIBILA/	aisha/
/Users/usuario/.zshrc:cd:6: no such file or directory: /Users/usuario/Documents/110_UNICORNS
usuario@Scifii 110_UNICORNS % >....                                             
            }

            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "podcast-card";
                card.innerHTML = `
                    <div class="podcast-header">
                        <h2 class="podcast-titulo">${item.titulo}</h2>
                        <span class="podcast-fecha">${item.fecha}</span>
                    </div>
                    <p class="podcast-descripcion">${item.descripcion}</p>
                    <a href="${item.enlace}" target="_blank" class="podcast-btn">ABRIR TRANSMISIÓN</a>
                `;
                contenedor.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            contenedor.innerHTML = `<p style="color: #ff0000;">ERROR: Conexión interrumpida con el JSON.</p>`;
        });
});
