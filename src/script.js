import $ from 'jquery';

function ModalDisplay() {
  		$('#exampleModal').on('show.bs.modal', function (event) {
            // Fix Animate.css
            let element = document.getElementById("parent_div1");
            element.removeAttribute('data-aos');
            // $('#parent_div1').removeClass('bounce');
        });

        $('#exampleModal').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
         	 let element = document.getElementById("parent_div1");
           	 element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });

         $('#exampleModal2').on('show.bs.modal', function (event) {
            let element = document.getElementById("parent_div2");
            element.removeAttribute('data-aos');   
        });

        $('#exampleModal2').on('hidden.bs.modal', function (e) {
         	 let element = document.getElementById("parent_div2");
           	 element.setAttribute('data-aos','flip-up');        
        });

         $('#exampleModal3').on('show.bs.modal', function (event) {
            let element = document.getElementById("parent_div3");
            element.removeAttribute('data-aos');      
        });

        $('#exampleModal3').on('hidden.bs.modal', function (e) {
         	 let element = document.getElementById("parent_div3");
           	 element.setAttribute('data-aos','flip-right');   
        });

}