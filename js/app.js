(() => {

    /*  const ascBtn = document.querySelector('#asc-btn');
     const descBtn = document.querySelector('#desc-btn');
 
     descBtn.addEventListener('click', () => {
         let iptv = document.querySelector('#ipt').value;
 
         let arr = iptv.split(' ');
         let maior;
 
         for (let i = 0; i < arr.length; i++) {
             for (let j = i + 1; j < arr.length; j++) {
                 if (arr[i] < arr[j]) {
                     maior = arr[j];
                     arr[j] = arr[i];
                     arr[i] = maior;
                 }
             }
         }
         let s = '';
         for (let ii = 0; ii < arr.length; ii++) {
             s += arr[ii] + ' ';
         }
         document.querySelector('#result').innerHTML = s;

     });
     ascBtn.addEventListener('click', () => {
         let iptv = document.querySelector('#ipt').value;
 
         let menor;
         let ar = iptv.split(' ');
         for (let i = 0; i < ar.length; i++) {
             for (let j = i; j < ar.length; j++) {
                 if (ar[i] > ar[j]) {
                     menor = ar[j];
                     ar[j] = ar[i];
                     ar[i] = menor;
                 }
             }
         }
         let v = ar.toString();
 
         let s = '';
         for (let ii = 0; ii < ar.length; ii++) {
             s += ar[ii]+' ';
         }
         document.querySelector('#result').innerHTML = s;
     }); */


    // Get rid of dry code //
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {

        button.addEventListener('click', (event) => {

            let ipt = document.querySelector('#ipt').value;
            let arr = ipt.split(' ');
            let m;

            for (let i = 0; i < arr.length; i++) {
                arr[i] = parseFloat(arr[i]);
            }

            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (event.target.value === 'Ascending') {
                        // Ascending
                        if (arr[i] > arr[j]) {
                            m = arr[j];
                            arr[j] = arr[i];
                            arr[i] = m;
                        }
                    } else {
                        // Descending
                        if (arr[i] < arr[j]) {
                            m = arr[j];
                            arr[j] = arr[i];
                            arr[i] = m;
                        }
                    }
                }
            }
            let s = '';
            for (let ii = 0; ii < arr.length; ii++) {
                if (Number(arr[ii])) {  s += arr[ii] + ' '; }
            }
            document.querySelector('#result').innerHTML = s;
            console.log(s);
            console.log(arr);
            // Fim do Teste

        });
    });
})();