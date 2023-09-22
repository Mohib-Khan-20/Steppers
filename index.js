let currentStep = 1;
        let stepIndicator = document.getElementById("stepIndicator");

        function next() {
            if (currentStep < 3) {
                currentStep++;
                updateStep();
                document.getElementById("span1").innerHTML=""
                var iconElement = document.createElement("i");
                iconElement.className = "bi bi-check-lg";
                var spanElement = document.getElementById("span1");
                spanElement.appendChild(iconElement);
                tick2()
                aa()
                
            }
           
            else if (currentStep === 3) {
               
                document.getElementById("next").textContent = "Finish";
                stepIndicator.innerHTML = "All steps completed - you're finished";
                document.getElementById("span3").innerHTML=""
        var iconElement = document.createElement("i");
        iconElement.className = "bi bi-check-lg";
        var spanElement = document.getElementById("span3");
        spanElement.appendChild(iconElement);
                // document.getElementById("back").disabled = true;
            }
            
           
        }

        function back() {
            if (currentStep > 1) {
                currentStep--;
                updateStep();
                
                document.getElementById("span1").innerHTML="1"
                document.getElementById("span2").innerHTML="2"
                document.getElementById("span3").innerHTML="3"
                aa()
            }
            else if (currentStep === 1) {
                
                // document.getElementById("next").textContent = "Finish";
                document.getElementById("back").style.cursor = "context-manue";
                
                
            }
        }

        function updateStep() {
            stepIndicator.innerHTML = "Step " + currentStep;

           
            document.getElementById("back").disabled = currentStep == 1;

            // Update step indicators
            let p = document.querySelectorAll(".p-1")
           p.forEach((p,index) =>{
            if(index<currentStep){
                p.style.color="black"
                // document.getElementById("back").style.cursor = "context-manue";
            }
            else if(index>currentStep){
                document.getElementById("back").style.cursor = "context-manue";
            }
            else if(index<3){
                p.style.color="rgba(0, 0, 0, 0.38)"
                document.getElementById("back").style.cursor = "pointer";
            }
           })
           



            let stepIndicators = document.querySelectorAll(".span-1");
            stepIndicators.forEach((span, index) => {
                if (index < currentStep) {
                    span.style.backgroundColor = "#1976d2";
                    span.style.color = "white";
                    
                } 
               
                else {
                    span.style.backgroundColor = "rgba(0, 0, 0, 0.38)";
                    span.style.color = "rgba(0, 0, 0, 0.38)";
                }
            });
        }

        // Initialize with the first step
        updateStep();


    //   function tick(){
    //     if (currentStep < 3) {        
    //         document.getElementById("span1").innerHTML=""
    //         var iconElement = document.createElement("i");
    //         iconElement.className = "bi bi-check-lg";
    //         var spanElement = document.getElementById("span1");
    //         spanElement.appendChild(iconElement);
            
    //     }
    //   }

    function tick2(){
        if(currentStep==3){
        document.getElementById("span2").innerHTML=""
        var iconElement = document.createElement("i");
        iconElement.className = "bi bi-check-lg";
        var spanElement = document.getElementById("span2");
        spanElement.appendChild(iconElement);
        }
    }
   function aa(){
    if(currentStep<3){
        document.getElementById("next").innerHTML="Next"
    }
   }
      
     