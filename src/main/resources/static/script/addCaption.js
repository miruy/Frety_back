// 캡션 달기
function addCaption(lineContainer, lineData) {
 const removeBtn = document.createElement('button');
    removeBtn.className = 'absolute right-8 p-1.5 hover:bg-zinc-100 rounded-md';
    removeBtn.innerHTML = `
     <svg class="w-[18px]" version="1.1" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Icons-AV" transform="translate(-1.000000, -3.000000)"><g id="closed-caption" transform="translate(1.000000, 3.000000)"><path d="M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L16,16 C17.1,16 18,15.1 18,14 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M8,7 L6.5,7 L6.5,6.5 L4.5,6.5 L4.5,9.5 L6.5,9.5 L6.5,9 L8,9 L8,10 C8,10.6 7.6,11 7,11 L4,11 C3.4,11 3,10.6 3,10 L3,6 C3,5.4 3.4,5 4,5 L7,5 C7.6,5 8,5.4 8,6 L8,7 L8,7 Z M15,7 L13.5,7 L13.5,6.5 L11.5,6.5 L11.5,9.5 L13.5,9.5 L13.5,9 L15,9 L15,10 C15,10.6 14.6,11 14,11 L11,11 C10.4,11 10,10.6 10,10 L10,6 C10,5.4 10.4,5 11,5 L14,5 C14.6,5 15,5.4 15,6 L15,7 L15,7 Z" id="Shape"/></g></g></g>
     </svg>
    `;

    removeBtn.onclick = function () {
        uploadedLyrics.removeChild(lineContainer);
        const index = lyricsData.indexOf(lineData);
        if (index > -1) {
            // 삭제된 행 데이터를 배열에서 제거
            lyricsData.splice(index, 1);
        }
    };
    lineContainer.appendChild(removeBtn);
}