const myinput = document.getElementById('text'),
    validbutton = document.querySelector('.fa-paper-plane')
let   data = {
        happiness: {
            pêrcentage: 0,
            occurrence: 0
        },
        sadness: {
            pêrcentage: 0,
            occurrence: 0
        }
    }

const getemotions = async ()=>{
    const response = await fetch('feelings.json')
    const feelings = await response.json()
    if(feelings)    
        return feelings  
    else
        alert('it doesn"t exist')
}
const getdef = async ()=>{
    const response1 = await fetch('chatbotdef.json')
    const chatbotdef = await response1.json()
    if(chatbotdef)    
        return chatbotdef  
    else
        alert('it doesn"t exist')
}

//button validation
validbutton.onclick = async()=>{
    const mymsg = myinput.value.split(" ")
    const chatbotdef = await getdef()
    const feelings = await getemotions(),
        chat = document.querySelector('.chatbox')
    
    chat.innerHTML +=`
    <li class="chatt outcoming">
    <p>${myinput.value}</p>
</li>
    `
    let nbrDef = 0 
    mymsg.forEach(element => {
        if(chatbotdef['Definition'].includes(element.toLowerCase())) 
            nbrDef +=1
    });
    if(nbrDef > 0){
        chat.innerHTML += `
            <li class="chatt incoming">
            <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
            <p>Hi there! Meet Emobot, your adorable emotion guru! <br>This charming bot analyzes the words you share, revealing the magic behind your mood.<br>It's like having a tiny happiness detective and a comforting friend rolled into one.<br> Emobot not only computes the percentages of your joy and sorrow but also sprinkles your day with positivity, <br>offering a collection of heartwarming words to uplift your spirits. Sending you smiles and sunshine, one message at a time!</p>
            </li>
          
          `
          nbrDef = 0
    }
    
    if(nbrDef == 0){
        mymsg.forEach(element => {
            if(feelings['happiness'].includes(element.toLowerCase())) 
                data.happiness.occurrence+=1
            else if(feelings['sadness'].includes(element.toLowerCase()))
                data.sadness.occurrence+=1
        });
        data.happiness.pêrcentage = Math.round((data.happiness.occurrence/(data.sadness.occurrence+data.happiness.occurrence))*100)
        data.sadness.pêrcentage = Math.round((data.sadness.occurrence/(data.sadness.occurrence+data.happiness.occurrence))*100)
        if( data.sadness.pêrcentage>=data.happiness.pêrcentage){
         
            if(data.sadness.pêrcentage>0 && data.sadness.pêrcentage<=20){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>I may not fully understand what you're going through, but I want you to know that I'm here for you.<br>You can type what you want for me .Sometimes, sharing the burden makes it a bit lighter.<br>Take things one step at a time, and remember that brighter days are ahead! SMILE ALWAYS :)</p><br>
                </li>
                `
            }else if(data.sadness.pêrcentage>20 && data.sadness.pêrcentage<=50){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>Life has its ups and downs, and we all face moments that weigh heavy on our hearts.<br> It's okay to feel sad, and it's okay to take the time you need to heal.<br>Remember, you're not alone, and your feelings are valid.</p><br>
                </li>
                `
            }else if(data.sadness.pêrcentage>50 && data.sadness.pêrcentage<=70){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>Crying will help you sometimes ! <br>try to stay alone in a calm place and remember everything can be solved none in this world is in a good situation people suffer everywhere ! please handle the pain and saty strong. <br>Take things at your own pace, and remember that there are people who care about you.</p><br>
                </li>
                `
            }else{
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>You're so sad <span><i class="fa-regular fa-face-sad-tear"></i>.</span>! but u can go through this , no one deserve to stay in darkness make appear your wings and let the world discover a new HUMAN !! <br> destroy your sadness and restore your power , charge your battery and load into the world again you can do this believe me no time for crying !</p>
                </li>
                `
            }
        }else{
            if(data.happiness.pêrcentage>0 && data.happiness.pêrcentage<=20){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>Wishing you more reasons to smile and sending positive vibes your way.<br>Stay determined and forget about your sadness!</p><br>
                </li>
                `
            }else if(data.happiness.pêrcentage>20 && data.happiness.pêrcentage<=50){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>Stay positive share smile around people you're born to be happy not to live in darkness ! Live! <br>Livre your life as it's.</p>
                </li>
                `
            }else if(data.happiness.pêrcentage>50 && data.happiness.pêrcentage<=70){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>You're in the right path! keep going and stay always in a good mood !<br>Do things that you love share moments with freinds and be always with family ! go through your sadness and destroy it. </p><br>
                </li>
                `
            }else if(data.happiness.pêrcentage>70){
                chat.innerHTML += `
                <li class="chatt incoming">
                <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
                <p>You're so happy ! Emobot is glad for you <span><i class="fa-regular fa-face-smile" ></i> .</span><br>Keep those vibes and keep going you're really good hiding your stress and sadness you will be fine you're so strong!</p>
                </li>
                `
            }
        }
        if( data.sadness.pêrcentage>0 || data.happiness.pêrcentage>0){
            chat.innerHTML += `
            <li class="chatt incoming">
            <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
            <p>you are <span id=pink>${data.happiness.pêrcentage}%  happy <i class="fa-regular fa-face-smile" ></i></span> and <span id=darkgray>${data.sadness.pêrcentage}% sad <i class="fa-regular fa-face-sad-tear"></i></span></p>
        </li>
        `
        } else {
            chat.innerHTML +=  `
            <li class="chatt incoming">
            <img src="/botchat.jpg" alt="chatbotimg" width="50px" height="50px"  style="border-radius: 50px;">
            <p>can you please explain your feelings to test Emobot ? </p>
        </li>
        `
        }
    
        data = {
                happiness: {
                    pêrcentage: 0,
                    occurrence: 0
                },
                sadness: {
                    pêrcentage: 0,
                    occurrence: 0
                }
            }
        myinput.value = ''
    }
    
}


