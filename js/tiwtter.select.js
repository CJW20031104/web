const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const charCount = document.querySelector('.char_count');
    
    nameInput.addEventListener('input', function() {
      charCount.textContent = `${this.value.length} / 50`;
    });

    let select = document.getElementsByClassName('select1')[0];
    for (let i = 0; i < 12; i++) {
      let option = document.createElement('option');
      option.textContent = `${i + 1}월`; 
      select.appendChild(option);
    }

    let select2 = document.getElementsByClassName('select2')[0];
    for (let i = 0; i < 31; i++) {
      let option = document.createElement('option');
      option.textContent = `${i + 1}일`; 
      select2.appendChild(option);
    }

    let select3 = document.getElementsByClassName('select3')[0];
    for (let i = 2024; i > 1950; i--) {
      let option = document.createElement('option');
      option.textContent = `${i + 1} 년`; 
      select3.appendChild(option);
    }



    const inputs = document.querySelectorAll('input, select');
    const button = document.getElementsByClassName('next_btn')[0];
    
    function validate() {
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const monthSelect = document.getElementsByClassName('select1')[0];
      const daySelect = document.getElementsByClassName('select2')[0];
      const yearSelect = document.getElementsByClassName('select3')[0];
      
      const isMonthSelected = monthSelect.selectedIndex > 0;
      const isDaySelected = daySelect.selectedIndex > 0;
      const isYearSelected = yearSelect.selectedIndex > 0;
      
      const isValid = name && phone && isMonthSelected && isDaySelected && isYearSelected;
      
      button.disabled = !isValid;
      
      if(isValid) {
        button.style.backgroundColor = "#1d9bf0";
        document.getElementsByClassName('a_tag')[0].style.color = "white";
      } else {
        button.style.backgroundColor = "";
        document.getElementsByClassName('a_tag')[0].style.color = "";
      }
    }
    
    inputs.forEach(input => {
      input.addEventListener('input', validate);
      input.addEventListener('change', validate); 
    });
