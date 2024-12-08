
            function changeBorderColor(pBorderColor) {
              //alert('change border : '+pBorderColor);
              const cbimg1 = document.getElementById('circleimg1');
              cbimg1.style.border = "13px solid " + pBorderColor ;
              const cbimg2 = document.getElementById('circleimg2');
              cbimg2.style.border = "13px solid " + pBorderColor ;
              const cbimg3 = document.getElementById('circleimg3');
              cbimg3.style.border = "13px solid " + pBorderColor ;
            }

            // Open close based on table
            function actualizarImagen() {
                const imagenstatus = document.getElementById('circleimg3');
                const varEstadoNegocio = obtenerEstadoNegocio();
                const cbimg3 = document.getElementById('circleimg3');

                if (varEstadoNegocio=='green') {
                    imagenstatus.style.backgroundColor = 'green';
                    cbimg3.innerText  =  'ABIERTO';
                } else {
                    //imagenstatus.style.backgroundColor = varEstadoNegocio;
                    //imagenstatus.style.backgroundColor = '#ffcccb';
                    imagenstatus.style.backgroundColor = 'darkred';
                    cbimg3.innerText  =  'CERRADO';
                    
                }            
            }
            
            function obtenerEstadoNegocio() {
                // Obtiene la fecha y hora actual
                const fechaActual = new Date();
                const diaActual = fechaActual.getDay(); // day mumber (sunday 0 , monday 1, etc.)
                const horaActual = fechaActual.getHours(); // Hora actual (0-23)
                const status = getCellStatus(diaActual, horaActual+'00');
                return (status=='open') ? "green" : "red";
            }

            function getCellStatus(day, time) {

                // Get all the rows of the table body
                const rows = document.querySelectorAll('#schedule_table tr');

                // Loop through each row to find the right time
                for (let row of rows) {
                    const cell = row.cells[day+1]; // Get the cell for the specified day (column)
                    const cellContent = cell.textContent;
                    const isOpen = cell.classList.contains('open'); // Check if the cell has class 'open'
					//console.log('isOpen:'+ isOpen)
                    if (cellContent === time) {
                        // Check if the cell has the 'open' class
                        if (isOpen) {
                            return 'open';  // Return 'open' if the class is present
                        } else {
                            return 'false';  // Return 'false' if the class is present
						}
						
                    }
                }
				// If no matching time was found
				return 'false';  // Return 'false' if the class is not present
            }

            function goToParentIndex() {
            // Navegar un nivel hacia arriba y abrir index.html
            window.location.href = "../index.html";
            }

            function scrollToTop() {
                window.scrollTo({ top:0, behavior:'smooth' });
                //scrollToSection('topo');
            }

  function handleClick(url) {
    if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('http')) {
      window.location.href = url;  // Open the URL, email client, or phone dialer
    } else {
      alert("Invalid URL");
    }
  }
