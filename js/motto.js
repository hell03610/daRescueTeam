 var Motto = function(options){
            this.index = 0;
            this.section = document.querySelector('#contact .motto');
            this.paragraphs = options.paragraphs;

            this.display = function(){
                if(this.section.classList.contains('fadeIn')){
                    this.hide();
                    return;
                }
                
                this.section.innerHTML = this.paragraphs[this.index] + this.paragraphs[this.index + 1];
                this.index = (this.index + 2) % paragraphs.length;
                
                this.show();
            };

            this.hide = function(){
                this.section.classList.remove('fadeIn');
                this.section.classList.add('animated');
                this.section.classList.add('fadeOut');
                setTimeout(function(){ this.display(); }.bind(this), 500);
            };

            this.show = function(){
                this.section.classList.remove('fadeOut');
                this.section.classList.add('animated');
                this.section.classList.add('fadeIn');   
                setTimeout(function() { this.display(); }.bind(this), 5000);
          
            }

            this.start = function(){
                this.display();
            }
        }