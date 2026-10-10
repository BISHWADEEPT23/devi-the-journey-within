const deities=[
{name:'Kali',flower:'Courage',theme:'Fear and impermanence',teaching:'Recognize what cannot be controlled. Choose a courageous and compassionate action instead of allowing fear to govern your choices.'},
{name:'Tara',flower:'Guidance',theme:'Uncertainty and hope',teaching:'Wisdom sometimes begins with asking for help. Take one thoughtful step even when the whole path is not visible.'},
{name:'Tripura Sundari',flower:'Harmony',theme:'Beauty and self-worth',teaching:'Your worth is not a contest. Seek balance, recognize dignity, and honor beauty beyond comparison.'},
{name:'Bhuvaneshwari',flower:'Perspective',theme:'Expanding awareness',teaching:'Make room for more than one perspective. Pause before turning a passing emotion into a permanent judgment.'},
{name:'Chhinnamasta',flower:'Humility',theme:'Ego and interdependence',teaching:'Release defensive pride without abandoning self-respect. Recognize how our lives depend upon one another.'},
{name:'Bhairavi',flower:'Discipline',theme:'Energy and purpose',teaching:'Discipline is not punishment. Direct your strength toward actions that serve meaningful commitments.'},
{name:'Dhumavati',flower:'Acceptance',theme:'Loss and uncertainty',teaching:'Acknowledge difficulty without forcing a cheerful story. Hardship does not diminish human dignity.'},
{name:'Bagalamukhi',flower:'Restraint',theme:'Speech and reaction',teaching:'Before reacting, pause. Choose words that are truthful, necessary, and respectful.'},
{name:'Matangi',flower:'Expression',theme:'Voice and inclusion',teaching:'Speak with clarity and listen without prejudice. Wisdom can emerge from voices society overlooks.'},
{name:'Kamala',flower:'Responsibility',theme:'Prosperity and gratitude',teaching:'Let prosperity support ethical living, generosity, and responsibility toward others.'}
];

// Build 03: original symbolic shrine compositions, not representations of canonical deity iconography.
// Every sanctuary receives a different architectural silhouette, mandala and accent.
const shrineStyles=[
 {tone:'#8d2434',symbol:'काल',arch:'flame',petals:8},
 {tone:'#53658c',symbol:'तारा',arch:'wave',petals:6},
 {tone:'#b9687a',symbol:'श्री',arch:'lotus',petals:12},
 {tone:'#bc8546',symbol:'भुवन',arch:'sky',petals:10},
 {tone:'#a63444',symbol:'बोध',arch:'flame',petals:5},
 {tone:'#c2793f',symbol:'तप',arch:'flame',petals:9},
 {tone:'#8e8983',symbol:'शून्य',arch:'wave',petals:7},
 {tone:'#d1a640',symbol:'मौन',arch:'lotus',petals:8},
 {tone:'#54856b',symbol:'वाणी',arch:'sky',petals:10},
 {tone:'#b89449',symbol:'कमल',arch:'lotus',petals:12}
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function shrineMarkup(i){
 const v=shrineStyles[i], points=Array.from({length:v.petals},(_,j)=>{
   const a=j*360/v.petals;
   return `<ellipse cx="450" cy="210" rx="13" ry="43" transform="rotate(${a} 450 241)" fill="${v.tone}" fill-opacity=".09" stroke="${v.tone}" stroke-width="1.4"/>`;
 }).join('');
 const side=v.arch==='flame'?'M360 330Q320 280 354 230Q332 190 375 152':v.arch==='wave'?'M360 330Q315 300 360 265T360 190':v.arch==='sky'?'M350 320Q318 185 450 150':'M350 320Q300 250 380 190Q410 170 450 152';
 const emblems=[
 '<path d="M450 191Q418 227 450 277Q482 227 450 191M420 250Q450 225 480 250"/>',
 '<path d="M415 257Q450 208 485 257M450 205V270M429 226Q450 209 471 226"/>',
 '<path d="M450 196Q485 231 450 269Q415 231 450 196M415 241H485"/>',
 '<circle cx="450" cy="241" r="30"/><path d="M420 241H480M450 211V271"/>',
 '<path d="M450 199V270M421 222L479 260M479 222L421 260"/>',
 '<path d="M450 196Q421 226 450 245Q479 265 450 283M427 253L450 221L473 253"/>',
 '<path d="M412 251Q450 209 488 251M417 261Q450 241 483 261"/>',
 '<path d="M416 239H484M450 205V274M430 215L470 263"/>',
 '<path d="M421 261Q450 212 479 261M415 230Q450 255 485 230"/>',
 '<path d="M450 205Q482 231 450 268Q418 231 450 205M419 254Q450 240 481 254"/>'
 ];
 const emblem=`<g class="devi-emblem" fill="none" stroke="${v.tone}" stroke-width="2.6" stroke-linecap="round">${emblems[i]}</g>`;
 const bells=Array.from({length:5},(_,k)=>`<g transform="translate(${340+k*55} 142)" stroke="${v.tone}" fill="none"><path d="M0 0v11m-5 8q5-13 10 0z"/><circle cy="21" r="2" fill="${v.tone}"/></g>`).join('');
 const lamps=`<g stroke="${v.tone}" fill="none"><path d="M320 326h30m-25-6h20m-10 0v-24m-6 0q6-17 12 0q-6 8-12 0 M550 326h30m-25-6h20m-10 0v-24m-6 0q6-17 12 0q-6 8-12 0"/><path d="M330 294q-8-13 2-22q9 12-2 22 M560 294q-8-13 2-22q9 12-2 22" fill="#d7a451" fill-opacity=".5"/></g>`;
 return `<g class="shrine-architecture" fill="none" stroke="${v.tone}" stroke-width="2"><path d="${side}"/><path d="${side}" transform="translate(900 0) scale(-1 1)"/><path d="M370 165Q450 95 530 165"/><path d="M385 165Q450 115 515 165"/></g>${bells}${lamps}<circle cx="450" cy="241" r="79" fill="${v.tone}" fill-opacity=".035" stroke="${v.tone}" stroke-width="1.4"/>${points}<circle cx="450" cy="241" r="26" fill="#f4ebd8" stroke="${v.tone}" stroke-width="2"/>${emblem}<text x="450" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="${v.tone}">${esc(v.symbol)}</text><text x="450" y="344" text-anchor="middle" fill="${v.tone}" font-size="16" letter-spacing="2">${esc(deities[i].name.toUpperCase())}</text>`;
}
function updateShrine(index,phase){
 const shrine=$('shrine'), stage=$('stage');
 if(index>=0&&index<10){
   shrine.innerHTML=shrineMarkup(index);
   stage.style.setProperty('--shrine-accent',shrineStyles[index].tone);
   stage.dataset.temple=String(index+1);
 }else if(index===10){
   shrine.innerHTML='<circle cx="450" cy="241" r="95" fill="none" stroke="#b89449" stroke-width="3"/><text x="450" y="222" text-anchor="middle" font-size="20" fill="#691c2a">तमसो मा ज्योतिर्गमय</text><text x="450" y="244" text-anchor="middle" font-size="12.5" fill="#691c2a">From darkness, lead me to light</text><text x="450" y="264" text-anchor="middle" font-size="9.5" fill="#795d55" letter-spacing="0.5">Bṛhadāraṇyaka Upaniṣad 1.3.28 · Pavamāna Mantra</text><text x="450" y="286" text-anchor="middle" font-size="12" fill="#691c2a" font-style="italic">Wisdom into compassionate action</text>';
   stage.style.setProperty('--shrine-accent','#b89449');
   stage.dataset.temple='final';
 }else{shrine.innerHTML='';stage.dataset.temple='entrance'}
 const d=index>=0&&index<10?deities[index]:null;
 $('sanctuaryName').textContent=d?`${index+1} / 10 · ${d.name}`:index===10?'Final sanctuary':'Mahalaya entrance';
 $('sanctuarySymbol').textContent=d?`Symbolic motif · ${d.flower}`:index===10?'The ten flowers are offered':'The first gate awaits';
 $('templePath').innerHTML=deities.map((x,i)=>`<button type="button" class="path-node ${index===i?'active':''} ${i<=state.highestVisited&&index!==i?'visited':''}" data-jump="${i}" ${i>state.highestVisited?'disabled':''} aria-label="${esc(x.name)} temple" aria-current="${index===i?'step':'false'}">${i+1}</button>`).join('');
}

// Build 02: self-contained vector character rig. Each pose is an independent SVG drawing.
// The same silhouette, hair, outfit and maroon trim are preserved across poses.
const poseNames=['walk','gate','prayer','receive','offering'];
// Build 07: choreography is keyed to the current pilgrimage state.
// CSS handles intermediate movement; the final position remains stable after each transition.

function characterMarkup(kind,pose){
 const man=kind==='purush', x=man?-29:29, kneel=pose==='prayer'||pose==='offering';
 const facing=pose==='walk'?'side':pose==='gate'?'back':'front';
 const dress=man?'#f7ebd6':'#f5e4d4', edge='#691c2a', ink='#332724';
 const headY=kneel?-43:-66, bodyTop=kneel?-31:-53, bodyBottom=kneel?0:-12;
 const head=`<ellipse cx="0" cy="${headY}" rx="10" ry="12" fill="#e0b996" stroke="${ink}" stroke-width="1.8"/>`;
 const hair=man?`<path d="M-10 ${headY-3} Q-12 ${headY-18} 1 ${headY-13} Q13 ${headY-12} 10 ${headY-2} Q2 ${headY-9} -10 ${headY-3}Z" fill="${ink}"/><path d="M-5 ${headY+8} Q0 ${headY+15} 5 ${headY+8}" fill="none" stroke="${ink}" stroke-width="1.5"/>`:`<path d="M-10 ${headY-3} Q-10 ${headY-16} 0 ${headY-15} Q11 ${headY-14} 10 ${headY-2} L12 ${headY+31} Q3 ${headY+35} 5 ${headY+14}" fill="${ink}"/><path d="M-5 ${headY-12} Q0 ${headY-18} 5 ${headY-12}" fill="none" stroke="${edge}" stroke-width="2"/>`;
 const jewelry=man?`<path d="M-8 ${headY+12} Q0 ${headY+18} 8 ${headY+12}" fill="none" stroke="${edge}" stroke-width="1.2"/>`:`<circle cx="0" cy="${headY-2}" r="1.5" fill="${edge}"/><path d="M-8 ${headY+12} Q0 ${headY+24} 8 ${headY+12}" fill="none" stroke="${edge}" stroke-width="1.5"/><circle cx="-11" cy="${headY+5}" r="2" fill="${edge}"/><circle cx="11" cy="${headY+5}" r="2" fill="${edge}"/>`;
 const torso=man?`<path d="M-13 ${bodyTop} Q0 ${bodyTop-5} 13 ${bodyTop} L16 ${bodyBottom} H-16 Z" fill="${dress}" stroke="${ink}" stroke-width="1.8"/><path d="M-14 ${bodyBottom-10} H15" stroke="${edge}" stroke-width="5"/><path d="M8 ${bodyTop} L-5 ${bodyBottom}" stroke="${edge}" stroke-width="4"/>`:`<path d="M-12 ${bodyTop} Q0 ${bodyTop-5} 12 ${bodyTop} L21 ${bodyBottom+18} H-21 Z" fill="${dress}" stroke="${ink}" stroke-width="1.8"/><path d="M-10 ${bodyTop+2} Q5 ${bodyTop+16} 15 ${bodyBottom+17}" stroke="${edge}" stroke-width="5" fill="none"/><path d="M-20 ${bodyBottom+13} Q0 ${bodyBottom+9} 20 ${bodyBottom+13}" stroke="${edge}" stroke-width="2" fill="none"/>`;
 const textile=man?`<path d="M-8 ${bodyTop+7} V${bodyBottom-12} M0 ${bodyTop+7} V${bodyBottom-12}" stroke="${edge}" opacity=".26" stroke-width=".8"/>`:`<path d="M-10 ${bodyBottom+5} Q0 ${bodyBottom+2} 10 ${bodyBottom+5} M-14 ${bodyBottom+10} Q0 ${bodyBottom+7} 14 ${bodyBottom+10}" fill="none" stroke="${edge}" opacity=".6" stroke-width="1"/>`;
 const legs=kneel?`<path d="M-13 0 Q-30 9 -18 14 H16 Q31 11 13 0" fill="${dress}" stroke="${ink}" stroke-width="2"/>`:`<g class="stride"><path d="M-9 ${man?-12:7} L-13 13 L-21 17 M9 ${man?-12:7} L12 14 L22 17" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-21 17 h-7 M22 17 h7" stroke="${edge}" stroke-width="2"/></g>`;
 let arms;
 if(kneel){arms=`<path d="M-13 ${bodyTop+9} Q-21 ${bodyTop+21} -5 ${bodyTop+25} M13 ${bodyTop+9} Q21 ${bodyTop+21} 5 ${bodyTop+25}" stroke="${ink}" stroke-width="4" fill="none"/><path d="M-5 ${bodyTop+25} L0 ${bodyTop+18} L5 ${bodyTop+25}" stroke="${edge}" stroke-width="2" fill="none"/>`}
 else if(pose==='receive'){arms=`<path d="M-13 ${bodyTop+7} L-22 ${bodyTop+25} L-5 ${bodyTop+29} M13 ${bodyTop+7} L22 ${bodyTop+25} L5 ${bodyTop+29}" stroke="${ink}" stroke-width="4" fill="none"/>`}
 else{arms=`<g class="arm-swing"><path d="M-13 ${bodyTop+7} L-23 ${bodyTop+29} M13 ${bodyTop+7} L21 ${bodyTop+28}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/></g>`}
 const flower=pose==='receive'?`<g transform="translate(0 ${bodyTop+20})"><circle r="13" fill="#e3a55a" opacity=".22"/><path d="M0 7 Q-13-4 0-16 Q13-4 0 7 M0 7 Q-17 1-12-10 M0 7 Q17 1 12-10" stroke="${edge}" fill="#a33b53" stroke-width="1.4"/></g>`:'';
 const back=facing==='back'?`<path d="M-9 ${headY-5} Q0 ${headY-14} 9 ${headY-5}" stroke="${ink}" stroke-width="5" fill="none"/>`:'';
 const profile=facing==='side'?`<path d="M8 ${headY-2} l5 3 l-5 2" stroke="${ink}" stroke-width="1.3" fill="none"/>`:'';
 return `<g class="figure ${pose==='walk'?'is-walking':''}" transform="translate(${x} ${kneel?5:0})" aria-label="${kind}, ${pose} pose">${legs}${torso}${textile}${arms}${head}${hair}${jewelry}${back}${profile}${flower}</g>`;
}
function setCharacterPose(pose){
 $('purush').innerHTML=characterMarkup('purush',pose);
 $('stree').innerHTML=characterMarkup('stree',pose);
 $('travellers').dataset.pose=pose;
 $('travellers').setAttribute('aria-label',`Purush and Stree: ${pose==='prayer'?'praying with folded hands':pose==='receive'?'receiving a flower':pose==='offering'?'making their final offering':pose==='gate'?'entering the temple':'walking together'}`);
 $('movementNote').textContent={walk:'Walking together toward the next gateway.',gate:'Both travelers face the shrine as the gates open.',prayer:'Both kneel with folded hands in pranam.',receive:'They receive a symbolic flower of wisdom.',offering:'Together they offer all ten flowers.'}[pose];
}
function renderPoseGallery(){
 $('poseGallery').innerHTML=poseNames.map(p=>`<div class="pose-card"><svg viewBox="-72 -100 144 135" role="img" aria-label="Purush and Stree: ${p} pose"><g transform="translate(0 8)">${characterMarkup('purush',p)}${characterMarkup('stree',p)}</g></svg><strong>${p==='gate'?'Gate entry':p==='prayer'?'Pranam':p==='receive'?'Flower reception':p==='offering'?'Final offering':'Walking'}</strong></div>`).join('');
}

const $=id=>document.getElementById(id);const key='devi-journey-v1';let state={index:-1,phase:0,highestVisited:-1,notes:{}};try{const s=JSON.parse(localStorage.getItem(key));if(s&&Number.isInteger(s.index)&&s.index>=-1&&s.index<=10&&Number.isInteger(s.phase)&&s.phase>=0&&s.phase<=3){const notes=s.notes&&typeof s.notes==='object'&&!Array.isArray(s.notes)?Object.fromEntries(Object.entries(s.notes).filter(([k,v])=>deities.some(d=>d.name===k)&&typeof v==='string').map(([k,v])=>[k,v.slice(0,4000)])):{};let highestVisited=Number.isInteger(s.highestVisited)&&s.highestVisited>=-1&&s.highestVisited<=10?s.highestVisited:(s.index>=0?s.index:-1);if(s.index>=0&&s.index>highestVisited){highestVisited=s.index;}state={index:s.index,phase:s.index===10?0:s.phase,highestVisited,notes};}}catch{};
const save=()=>{try{localStorage.setItem(key,JSON.stringify(state))}catch(e){console.warn('Local save unavailable',e)}};
let transitioning=false;
let replaying=false;
let replayTimer=null;
const reduced=()=>document.body.classList.contains('reduce-motion')||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait=ms=>new Promise(resolve=>window.setTimeout(resolve,ms));
let sceneToken=0;
function clearReplay(){
 if(replayTimer){window.clearTimeout(replayTimer);replayTimer=null;}
 const stage=$('stage');
 if(stage)stage.classList.remove('replay-scene');
 replaying=false;
 const replayBtn=$('replayScene');
 if(replayBtn)replayBtn.disabled=transitioning;
}
async function choreograph(action){
 if(transitioning)return;
 clearReplay();
 if(reduced()){action();return}
 transitioning=true;const token=++sceneToken;const stage=$('stage');
 const nextBtn=$('next');const backBtn=$('back');const replayBtn=$('replayScene');
 if(nextBtn)nextBtn.disabled=true;
 if(backBtn)backBtn.disabled=true;
 if(replayBtn)replayBtn.disabled=true;
 try{
   stage.classList.add('scene-exit');
   await wait(420);
   if(token!==sceneToken)return;
   action();
   stage.classList.remove('scene-exit');
   stage.classList.add('scene-enter');
   await wait(740);
   if(token!==sceneToken)return;
 }finally{
   if(token===sceneToken){
     stage.classList.remove('scene-exit','scene-enter');
     transitioning=false;
     render();
   }
 }
}

function sceneTransition(action){return choreograph(action)}
const phases=['approach','open','shrine','flower'];
function render(){const {index,phase}=state;const isFinal=index===10;const d=index>=0&&index<10?deities[index]:null;const stageState=isFinal?'final':index<0?'approach':phases[Math.min(phase,3)];$('stage').dataset.state=stageState;updateShrine(index,phase);setCharacterPose(isFinal?'offering':index<0||phase===0?'walk':phase===1?'gate':phase===2?'prayer':'receive');$('chapterTitle').textContent=isFinal?'The final offering':d?`${String(index+1).padStart(2,'0')} · ${d.name}`:'The first gate';$('chapterSub').textContent=isFinal?'The ten flowers are offered. The journey continues through everyday action.':d?d.theme:'Purush and Stree approach the temple together.';$('stageLabel').textContent=isFinal?'Wisdom becomes action':index<0?'The gates await':phase===0?'Approaching the gate':phase===1?'The temple opens':phase===2?'Pranam · Listen · Understand':'The flower of wisdom';$('lessonType').textContent=isFinal?'THE JOURNEY RETURNS TO LIFE':d?`MAHAVIDYA ${index+1} / 10`:'THE JOURNEY BEGINS';$('lessonTitle').textContent=isFinal?'Live what you have learned':d?phase===3?`Flower of ${d.flower}`:d.name:'A shared pilgrimage';$('reflection').hidden=!(d&&phase===2);$('lessonText').textContent=isFinal?'The travelers offer their ten symbolic flowers, then return to family, work, community, and nature. Dharma is practiced in daily choices.':d?phase===0?'Approach the next sacred gateway.':phase===1?'Enter respectfully and prepare to listen.':phase===2?d.teaching:`Receive the symbolic flower of ${d.flower}. This represents reflection, not religious merit.`:'Walk together toward the first temple. Every encounter is an invitation to learn and reflect.';const sacred=$('sacredLesson');sacred.hidden=!(d&&phase===2);if(d&&phase===2){const source=window.DEVI_SCRIPTURE;const arc=source.charitas.find(c=>c.id===source.chapterLinks[index]);const verseIdx=index%source.verses.length;const v=source.verses[verseIdx];const reuseNotice=index>=source.verses.length?`<p class="editorial-warning" style="margin:8px 0;font-size:12px;line-height:1.5"><strong>Thematic Selection Note:</strong> This verse is chosen from the three curated Durga Saptashati passages to accompany contemplation on ${esc(d.name)}. It is not an individual canonical verse unique to this Mahavidya.</p>`:'';sacred.innerHTML=`<p class="eyebrow">DURGA SAPTASHATI EXCERPT · SELECTED VERSE (${verseIdx+1} OF 3)</p><h4>${esc(v.label)}</h4><p class="sanskrit" lang="sa">${esc(v.text)}</p><p class="iast">${esc(v.iast)}</p><p>${esc(v.translation)}</p><small><strong>Source:</strong> ${esc(v.source)}, ${esc(v.verses)}. <em>${esc(v.editionNote)}</em></small>${reuseNotice}<hr><p class="eyebrow">THEMATIC CONNECTION — EDITORIAL INTERPRETATION</p><p><strong>Narrative Arc:</strong> ${esc(arc.title)} (${esc(arc.form)}) — ${esc(arc.episode)}.</p><small style="color:var(--muted);display:block;margin-top:4px;line-height:1.5"><em>Editorial Clarification: The grouping of the Ten Mahavidyas alongside the Three Charitas is an original pedagogical harmonization. In classical Shakta tradition, the Dasha Mahavidyas form an independent tantric mandala, distinct from the Durga Saptashati narrative structure.</em></small><hr><p class="eyebrow">MODERN CONTEMPLATION · ORIGINAL REFLECTION</p><p><strong>Temple Teaching:</strong> ${esc(d.teaching)}</p><p><strong>Practical Inquiry:</strong> ${esc(arc.reflection)}</p>`;}$('answer').value=d&&phase===2?(state.notes[d.name]||''):'';$('returnJourney').hidden=!isFinal;if(isFinal){$('offeringFlowers').innerHTML=deities.map((x,i)=>`<span title="${esc(x.name)}: ${esc(x.flower)}" aria-label="${esc(x.flower)} flower">✿</span>`).join('');}$('sceneProgress').textContent=isFinal?'Journey complete':index<0?'The approach':`${index+1} of 10 · ${['Approach','Gate opening','Pranam and learning','Flower received'][phase]}`;$('next').textContent=isFinal?'Begin again ↺':index<0?'Approach Kali →':phase===0?'Open the gates →':phase===1?'Pranam and listen →':phase===2?'Receive the flower →':index===9?'Make the final offering →':'Continue to next temple →';$('next').disabled=transitioning||replaying;$('back').disabled=index===-1||transitioning||replaying;const replayBtn=$('replayScene');if(replayBtn)replayBtn.disabled=transitioning||replaying;$('count').textContent=`${isFinal?10:Math.max(0,index+(phase===3?1:0))} / 10`;const got=isFinal?10:Math.max(0,index+(phase===3?1:0));$('flowerTray').innerHTML=deities.map((x,i)=>`<span class="${i<got?'gained':''}" title="${x.name}: ${x.flower}" aria-label="${x.flower}: ${i<got?'collected':'not yet collected'}">✿</span>`).join('');save()}
$('next').addEventListener('click',()=>sceneTransition(()=>{if(state.index===10){state={...state,index:-1,phase:0,highestVisited:-1}}else if(state.index===-1){state.index=0;state.phase=0;state.highestVisited=Math.max(state.highestVisited,0)}else if(state.phase<3){state.phase++}else if(state.index===9){state.index=10;state.phase=0;state.highestVisited=Math.max(state.highestVisited,10)}else{state.index++;state.phase=0;state.highestVisited=Math.max(state.highestVisited,state.index)}render()}));$('back').addEventListener('click',()=>sceneTransition(()=>{if(state.index===10){state.index=9;state.phase=3}else if(state.phase>0){state.phase--}else if(state.index===0){state.index=-1}else{state.index--;state.phase=3}render()}));$('answer').addEventListener('input',e=>{if(state.index>=0&&state.index<10){state.notes[deities[state.index].name]=e.target.value.slice(0,4000);save()}});$('wisdomGrid').innerHTML=deities.map((d,i)=>`<div class="wisdom-card"><small>${String(i+1).padStart(2,'0')}</small><b>${d.name}</b><span>${d.flower} · ${d.theme}</span></div>`).join('');$('motion').addEventListener('click',()=>{const enabled=document.body.classList.toggle('reduce-motion');$('motion').setAttribute('aria-pressed',String(enabled));$('motion').textContent=enabled?'Enable motion':'Reduce motion';if(enabled)clearReplay();try{localStorage.setItem('devi-reduce-motion',String(enabled))}catch{}});renderPoseGallery();render();

$('templePath').addEventListener('click',e=>{const node=e.target.closest('[data-jump]');if(!node||node.disabled||transitioning||replaying)return;const target=Number(node.dataset.jump);if(target<=state.highestVisited&&target!==state.index)sceneTransition(()=>{state.index=target;state.phase=0;render()})});

// Saptashati research library, intentionally separate from Mahavidya chapters.
(function(){const data=window.DEVI_SCRIPTURE;if(!data)return;
$('charitaGrid').innerHTML=data.charitas.map(c=>`<article class="charita-card"><p class="eyebrow">CHAPTERS ${esc(c.chapters)}</p><h3>${esc(c.title)}</h3><strong>${esc(c.form)}</strong><p>${esc(c.episode)}</p><p><b>Contemporary reflection:</b> ${esc(c.reflection)}</p></article>`).join('');
$('verseLibrary').innerHTML=data.verses.map(v=>`<article class="verse-card"><h4>${esc(v.label)}</h4><p class="sanskrit" lang="sa">${esc(v.text)}</p><p class="iast">${esc(v.iast)}</p><p>${esc(v.translation)}</p><small><strong>Source:</strong> ${esc(v.source)}, ${esc(v.verses)} · <em>${esc(v.editionNote)}</em></small></article>`).join('');})();

// Build 07 / Phase 02C: restart choreography at any time without deleting saved reflections.
const replay=document.getElementById('replayScene');
if(replay)replay.addEventListener('click',()=>{
 if(transitioning||replaying)return;
 if(reduced())return;
 const stage=$('stage');
 if(!stage)return;
 replaying=true;
 const nextBtn=$('next');const backBtn=$('back');
 if(nextBtn)nextBtn.disabled=true;
 if(backBtn)backBtn.disabled=true;
 replay.disabled=true;
 stage.classList.remove('replay-scene');
 void stage.offsetWidth;
 stage.classList.add('replay-scene');
 if(replayTimer)window.clearTimeout(replayTimer);
 replayTimer=window.setTimeout(()=>{
   stage.classList.remove('replay-scene');
   replaying=false;
   replayTimer=null;
   if(nextBtn)nextBtn.disabled=transitioning;
   if(backBtn)backBtn.disabled=state.index===-1||transitioning;
   replay.disabled=transitioning;
 },1600);
});

// Build 08 — narration is opt-in and uses the browser speech engine; no remote audio is fetched.
// Captions always mirror the spoken text and are available without speech support.
(function(){
 const play=document.getElementById('narrate'),stop=document.getElementById('stopNarration');
 const caption=document.getElementById('narrationCaption'),lang=document.getElementById('voiceLanguage');
 if(!play||!stop||!caption)return;
 const supported='speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
 if(!supported){play.disabled=true;caption.textContent='Speech is unavailable in this browser. Read the teaching on screen.';}
 function cancel(){if(supported)window.speechSynthesis.cancel();}
 function words(){
   const i=state.index,d=deities[i];
   const isHindi=lang.value==='hi-IN';
   if(i===-1){
     return isHindi
       ? 'पवित्र अंतर्यात्रा में आपका स्वागत है। पुरुष और स्त्री विवेक के दस पवित्र धामों की ओर साथ चल रहे हैं। प्रत्येक पड़ाव आत्म-चिंतन और सत्य को सुनने का निमंत्रण है।'
       : 'Welcome to the sacred journey within. Purush and Stree walk together toward the ten sanctuaries of wisdom. Every encounter is an invitation to listen and reflect.';
   }
   if(i===10){
     return isHindi
       ? 'यात्रा अब जीवन में लौटती है। ज्ञान के दस पुष्प अर्पित हैं। धर्म, अर्थ, काम और मोक्ष के माध्यम से विवेक को करुणामय कर्म में बदलें।'
       : 'The pilgrimage returns to life. The ten symbolic flowers are offered. Wisdom becomes compassionate action through Dharma, Artha, Kama, and Moksha.';
   }
   if(!d)return isHindi?'करुणामय कर्म और दैनिक दायित्व के माध्यम से यह यात्रा जारी रहती है।':'The journey continues through compassionate action and daily responsibility.';
   if(isHindi){
     return `${d.name}। ज्ञान-पुष्प: ${d.flower}। जीवन-सूत्र: ${d.teaching} यह दैनिक जीवन के लिए एक आधुनिक चिंतन है, शास्त्रीय अनुवाद नहीं।`;
   }
   return `${d.name}. Flower of ${d.flower}. ${d.teaching} This is a contemporary reflection for daily life, not a scriptural translation.`;
 }
 play.addEventListener('click',()=>{
   if(!supported)return;cancel();const text=words();caption.textContent=text;
   try{
     const u=new SpeechSynthesisUtterance(text);u.lang=lang.value;u.rate=.85;
     if(window.speechSynthesis.getVoices){
       const voices=window.speechSynthesis.getVoices();
       const target=lang.value.toLowerCase();
       const match=voices.find(v=>v.lang&&v.lang.toLowerCase().replace('_','-')===target)||voices.find(v=>v.lang&&v.lang.toLowerCase().startsWith(target.slice(0,2)));
       if(match)u.voice=match;
     }
     u.onerror=()=>{caption.textContent=text+(lang.value==='hi-IN'?' — आवाज़ अनुपलब्ध है; स्क्रीन पर लिखा पाठ पढ़ें।':' — Speech audio unavailable on this device; read the caption.');};
     window.speechSynthesis.speak(u);
   }catch(e){
     caption.textContent=text+' — Speech audio could not be initialized.';
   }
 });
 stop.addEventListener('click',()=>{cancel();caption.textContent=lang.value==='hi-IN'?'कथा रोक दी गई है। पठन सामग्री स्क्रीन पर उपलब्ध है।':'Narration stopped. Read the teaching on screen.'});
 if(lang)lang.addEventListener('change',()=>{cancel();caption.textContent=lang.value==='hi-IN'?'हिन्दी कथा चुनी गई। "▶ Listen to teaching" दबाकर सुनें।':'English narration selected. Click "▶ Listen to teaching" to play.';});
 document.getElementById('next').addEventListener('click',cancel);
 document.getElementById('back').addEventListener('click',cancel);
 document.getElementById('templePath').addEventListener('click',cancel);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel()});
})();

// Build 09: print-friendly personal reflection summary. No network transfer.
const printButton=document.getElementById('printJourney');
if(printButton)printButton.addEventListener('click',()=>{
 const list=deities.map((d,i)=>`${i+1}. ${d.name} — ${d.flower}\n${state.notes[d.name]||'No reflection entered.'}`).join('\n\n');
 const popup=window.open('','_blank','width=760,height=850');
 if(!popup){window.alert('Allow pop-ups to print your reflections, or use your browser print command.');return;}
 const safe=esc(list);
 popup.document.write('<!doctype html><html><head><meta charset="utf-8"><title>DEVI — My Journey</title><style>body{font:16px/1.7 Georgia,serif;max-width:720px;margin:45px auto;padding:0 20px;color:#332724}h1{color:#691c2a}pre{font:inherit;white-space:pre-wrap}</style></head><body><h1>DEVI — The Journey Within</h1><p>Ten flowers of wisdom · Personal reflections</p><pre>'+safe+'</pre><p>Dharma · Artha · Kama · Moksha — Wisdom becomes action.</p></body></html>');
 popup.document.close();popup.focus();popup.print();
});

// Build 10: privacy and keyboard/accessibility hardening.
(function(){
 const motion=document.getElementById('motion');
 try{if(localStorage.getItem('devi-reduce-motion')==='true'){document.body.classList.add('reduce-motion');motion.setAttribute('aria-pressed','true');motion.textContent='Enable motion'}}catch{}
 const clear=document.getElementById('clearReflections');
 if(clear)clear.addEventListener('click',()=>{
   if(!window.confirm('Delete all saved reflections from this browser? This cannot be undone.'))return;
   state.notes={};save();if(state.index>=0&&state.index<10)document.getElementById('answer').value='';
   document.getElementById('privacyStatus').textContent='All locally saved reflections were deleted.';
 });
 const textarea=document.getElementById('answer');if(textarea)textarea.maxLength=4000;
})();
