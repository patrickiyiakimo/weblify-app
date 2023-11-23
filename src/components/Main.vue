<template>

    <main>
      <div class="border-one">
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
  </button>
      <h2>URL Shortener</h2>
      <p>Weblify is a <span>URL Shortener.</span>It offers <br> a simple and fast way to shorten and share your urls.</p>
      </div>
  
      <div class="border-two">
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
  </button>
    <h2>Customizable Link</h2>
    <p>Weblify offers a <span>"Custom Link</span> Solution". <br> For users to craft and customise their short links.</p>
      </div>
  
      <div class="border-three">
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
  </button>
      <h2>Track Your Clicks</h2>
      <p>Weblify is an advanced link <br>analytics platform that <span>tracks clicks</span> on short links and provides <br> extensive statistics to help you measure  <br>the effectiveness of your  <br> short links.</p>
      </div>
    </main>
  
   <h3><span><button>Sign Up</button></span></h3>
  </template>
  
  <style >
    main{
      background-color: rgb(182, 182, 192);
      display:inline-block;
      display:flex;
      text-indent:30px;
    
      /* justify-content:space-between; */
      border-radius:8px;
      text-align:center;
      margin-top:80px;
    }
  
    main span{
      color: rgb(32, 32, 184);
    }
  
    .border-one button{
      background-color: rgb(141, 141, 214);
      border:none;
      outline:none;
      height:50px;
      width:50px;
      margin-top:50px;
      border-radius:100px;
      margin-bottom:50px;
    }
    main p{
      padding-top:50px;
      text-align:center;
      padding-left:40px;
    }
    .border-one  svg{
      width:30px;
      height:30px;
      color:white;
      right:81.5%;
      margin-bottom:25px;
     bottom:-33%;
      
    }
    main span{
      color: rgb(32, 32, 184);
    }
     .border-two button{
      background-color: rgb(141, 141, 214);
      border:none;
      outline:none;
      height:50px;
      width:50px;
      margin-top:50px;
      border-radius:100px;
      margin-bottom:50px;
    }
    main p{
      padding-top:50px;
      text-align:center;
      padding-left:40px;
    }
     .border-two svg{
      width:30px;
      height:30px;
      color:white;
      right:50.5%;
      margin-bottom:25px;
     bottom:-34%;
      
    }
    main span{
      color: rgb(32, 32, 184);
    }
    .border-three button{
      background-color: rgb(141, 141, 214);
      border:none;
      outline:none;
      height:50px;
      width:50px;
      margin-top:50px;
      border-radius:100px;
      margin-bottom:50px;
    }
    main p{
      padding-top:50px;
      text-align:center;
      padding-left:40px;
      padding-bottom: 100px;
      margin-right:40px
    }
    .border-three svg{
      width:30px;
      height:30px;
      color:white;
      right:16.5%;
      margin-bottom:25px;
     bottom:-34%;
      
    }
   h3 span button{
      background-color: rgb(32, 32, 184);
      text-align:center;
      width:10%;
      height:40px;
      color:white;
      cursor:pointer;
      margin-top:50px;
      margin-left:45%;
      border-radius:8px;
      border:none;
      outline:none;
      margin-bottom:50px;
    }

    
   /* Mobile Phones (Portrait)  */
 /* @media (max-width: 767px) {}

  main{
    background-color: rgb(182, 182, 192);
    display:inline-block;
 
    text-indent:30px;
    border-radius:8px;
    text-align:center;
    margin-top:80px;
  }

  h3 span button{
    margin:auto;
    background-color: rgb(32, 32, 184);
    text-align:center;
    width:150px;
    height:40px;
    color:white;
    cursor:pointer;
    margin-top:50px;
    margin-left:35%;
    border-radius:8px;
    border:none;
    outline:none;
    margin-bottom:50px;
  } */
  /* .border-one  svg{
    width:30px;
    height:30px;
    color:white; 
     margin-bottom:25px;
   bottom:27px;
   position:absolute;
    
  } */
  /* .border-one button{
    background-color: rgb(141, 141, 214);
    border:none;
    outline:none;
    height:50px;
    width:50px;
    margin-top:50px;
    border-radius:100px;
    margin-bottom:30px;
  } */

  /* .border-two button{
    background-color: rgb(141, 141, 214);
    border:none;
    outline:none;
    height:50px;
    width:50px;
    margin-top:50px;
    border-radius:100px;
    margin-bottom:30px;
  } */

  /* .border-two svg{
    width:30px;
    height:30px;
    color:white;
    right:50.5%;
    margin-bottom:25px;
   bottom:-27%;
    
  } */

  /* .border-three button{
    background-color: rgb(141, 141, 214);
    border:none;
    outline:none;
    height:50px;
    width:50px;
    margin-top:50px;
    border-radius:100px;
    margin-bottom:30px;
  } */
  /* .border-three svg{
    width:30px;
    height:30px;
    color:white;
    right:16.5%;
    margin-bottom:25px;
   bottom:-27%;
  
  } */
 

    </style>