<template>
    <div class="brave-two">
     <h2>{{ title }}</h2>
     <p>{{ note }}</p>
     <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
 </svg></span>
 
 <h2> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
 </svg></span></h2>
     <button>Sign Up</button>
    </div>
    <div class="brave-section">
     <ul>
         <li>Shorten Links </li>
         <li>Track Links</li>
         <li>Contact</li>
         <li>About</li>
     </ul>
     <p>©Copyright 2023 - Weblify</p>
    </div>
 </template>
 <script>
     export default{
         data(){
             return{
                 title:'Weblify URL shortener',
                 note:"Weblify serves as a user-friendly URL shortener that simplifies the process of managing and shortening links, including branded ones. Enhance your brand's growth and business potential by utilizing short, memorable, and engaging links with Weblify's versatile platform.",
             }
         }
     }
 </script>
 <style>
     .brave-two{
         background-color: rgb(32, 32, 184);
         color:white;
         text-align:center;
         margin-top:60px;
         padding-top:40px;
         margin-left:30px;
         margin-right:30px;
         margin-bottom:70px;
         padding-bottom:80px;
         border-radius:14px;
     }
     .brave-two p{
         margin-top:70px;
         padding-left:80px;
         padding-right:80px;
         font-size:large;
         
     }
     .brave-two button{
     background-color:white;
     text-align:center;
     width:10%;
     height:40px;
     color:rgb(32, 32, 184);
     cursor:pointer;
     margin-top:50px;
     border-radius:8px;
     border:none;
     outline:none;
     }
     .brave-two span svg{
         color:lightslategray;
         position:absolute;
         width:100px;
         height:100px;
         left:80px;
     }
     .brave-two h2 span svg{
         position:absolute;
         width:100px;
         height:100px;
         left: 85%;
     }
     .brave-section{
         background-color:rgb(32, 32, 184);
         color:white;
         text-align:center;
     }
     .brave-section ul{
         display:flex;
        text-indent:60px;
        list-style-type: none;
        padding-left:30%;
        padding-top:80px;
     }
     .brave-section p{
         margin-top:60px;
         padding-bottom:80px;
       
     }


      /* @media (max-width: 767px) {  */
  /* Your CSS for mobile phones (portrait) here */

   /* .brave-two p{
        margin-top:70px;
      
        padding-left:20px;
        padding-right:20px;
        
    }
    .brave-two button{
    background-color:white;
    text-align:center;
    width:150px;
    height:40px;
    color:rgb(32, 32, 184);
    cursor:pointer;
    margin-top:50px;
    border-radius:8px;
    border:none;
    outline:none;
    } */

    /* .brave-section ul li{ 
         list-style-type: none;
        margin-right:160px;
        text-align:right; 
      
     }  */

     /* .brave-section ul{
        display:block; 
    
        
    }
    .brave-section{
        background-color:rgb(32, 32, 184);
        color:white;
       
     }

    .brave-two span svg{
        color:lightslategray;
        position:absolute;
        width:30px;
        height:30px;
        left:10px;
        top:550%;
    }
    .brave-two h2 svg{
        position:absolute;
        width:30px;
        height:30px;
        left: -70%;
    }
}  */

     </style>