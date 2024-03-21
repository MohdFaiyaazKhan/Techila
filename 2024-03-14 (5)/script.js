

        function show(i) {
            let elements = document.getElementsByClassName('desc');
            for (let j = 0; j < elements.length; j++) {
                if (j === i) {
                    if (elements[j].style.display === 'block') {
                        elements[j].style.display = 'none';
                    } else {
                        elements[j].style.display = 'block';
                    }
                } else {
                    elements[j].style.display = 'none';
                }
            }
        }
    
    