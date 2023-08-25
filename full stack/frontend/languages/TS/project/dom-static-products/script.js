let div=document.getElementById("root")



let myproducts=[{name: "Dijital watch",Image:'./1.jpeg'},
                {name:"Dijital watch",image:"./2.jpeg"},
                {name:"head phone",image:"./3.jpeg"} ,
                {name:"Lipstic",image:"./4.jpeg"} ,
                {name:"Kissan jam",image:"./5.jpeg"} ,
                {name:"1 plus phone",image:"./6.jpeg"} ,
                {name:"Apple phone",image:"./7.jpeg"} ,
                {name:"Headset",image:"./8.jpeg"} ,
                {name:"Kissan Mango Squash",image:"./9.jpeg"} ,
                {name:"Millet Museli",image:"./10.jpeg"} ,
            ]

            function displayProducts()
            {
                myproducts.map((item)=>{
               
                let image1=document.createElement('img')
                image1.src="./1.jpeg"
                image1.style.width="250px"
                div.appendChild(image1)
                
               //div.innerHTML="Dijital Watch"

                
                let image2=document.createElement('img')
                image2.src="./2.jpeg"
                image2.style.width="250px"
                div.appendChild(image2)
                
                let image3=document.createElement('img')
                image3.src="./3.jpeg"
                image3.style.width="250px"
                div.appendChild(image3)

                let image4=document.createElement('img')
                image4.src="./4.jpeg"
                image4.style.width="250px"
                div.appendChild(image4)

                let image5=document.createElement('img')
                image5.src="./5.jpeg"
                image5.style.width="250px"
                div.appendChild(image5)

                let image6=document.createElement('img')
                image6.src="./6.jpeg"
                image6.style.width="250px"
                div.appendChild(image6)

                let image7=document.createElement('img')
                image7.src="./7.jpeg"
                image7.style.width="250px"
                div.appendChild(image7)

                let image8=document.createElement('img')
                image8.src="./8.jpeg"
                image8.style.width="250px"
                div.appendChild(image8)

                let image9=document.createElement('img')
                image9.src="./9.jpeg"
                image9.style.width="250px"
                div.appendChild(image9)

                let image10=document.createElement('img')
                image10.src="./10.jpeg"
                image10.style.width="250px"
                div.appendChild(image10)


                }

                )
                



                
            }