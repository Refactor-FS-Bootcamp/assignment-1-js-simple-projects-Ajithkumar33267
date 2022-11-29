const paraArr = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis volutpat nisi. Nullam scelerisque sagittis suscipit. Proin blandit orci vitae sem eleifend, vel accumsan ex commodo. In et dignissim tellus. In hendrerit sodales cursus. Aenean feugiat convallis dictum. Cras pharetra turpis vel semper fermentum. Sed accumsan felis in velit rhoncus, ac venenatis tellus facilisis. Etiam id arcu porttitor, sollicitudin nisi non, placerat neque.',
    'Nam nisi felis, ornare vel lacus sit amet, auctor dignissim est. Etiam tempus sodales vulputate. Duis non elit mollis, tempus est in, viverra turpis. Praesent vel mi justo. Cras scelerisque felis a luctus dictum. Vivamus vitae elit in nunc pharetra imperdiet. Etiam euismod, arcu eu blandit vulputate, quam ante faucibus nisi, ut volutpat massa justo fringilla purus. Nunc non ante eu nibh vehicula ultrices quis at purus.',
    'Praesent pellentesque ullamcorper mi, nec eleifend neque tristique non. Pellentesque dictum fermentum turpis, vel accumsan odio congue eu. Phasellus vel magna aliquam ante suscipit tincidunt sed a ligula. Aenean lobortis, elit non pretium sodales, ipsum neque ornare urna, ac sollicitudin orci quam condimentum ante. Sed ut leo felis. Etiam a turpis vulputate turpis euismod ornare. Quisque eleifend libero a metus condimentum tempor. Fusce id neque vulputate, interdum lorem in, efficitur dui. Ut ligula velit, efficitur ac neque at, molestie consequat lorem. Etiam vitae placerat massa, quis pharetra magna. Nullam et ullamcorper tortor. Duis tristique, magna sed condimentum dapibus, urna sapien scelerisque diam, at egestas ipsum arcu eu nulla. Vestibulum rutrum finibus bibendum. Etiam congue varius lorem sit amet imperdiet.',
    'Sed ultrices orci vel semper dignissim. Fusce tincidunt sed quam vitae elementum. Integer scelerisque risus id vehicula laoreet. Vestibulum eu suscipit metus. Morbi laoreet rutrum ullamcorper. Donec imperdiet mi mi, et semper sapien tincidunt sit amet. Suspendisse condimentum urna a augue tristique tempor. Proin dapibus dolor dapibus, varius diam eget, viverra ex. Vestibulum convallis, libero vel varius gravida, velit est ornare sem, a condimentum urna ligula sit amet erat. Mauris id dignissim sapien. Etiam sit amet lorem vestibulum, lobortis nunc sed, ultricies quam. Nunc aliquet nulla magna, nec pellentesque lectus eleifend eget.',
    'Maecenas urna nisl, congue ac neque vitae, mattis vehicula felis. Nunc fermentum metus et odio efficitur dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tincidunt volutpat magna id consectetur. Curabitur pharetra, metus vel posuere fringilla, urna augue fermentum arcu, nec blandit diam lorem ut metus. Aliquam erat volutpat. Aliquam dapibus magna risus. Nullam eu blandit libero. Nullam augue ipsum, mattis nec finibus sed, commodo dictum risus. Pellentesque sit amet urna id velit consectetur elementum viverra ut ante. Integer ultricies, nisl venenatis dignissim consequat, metus arcu euismod felis, ut vehicula augue velit vitae leo. Donec laoreet est nec dignissim fermentum. Nulla faucibus ac dui sed sagittis. Cras in erat felis.',
    'Suspendisse eleifend libero eget aliquet sodales. Sed tincidunt augue pharetra est euismod scelerisque. Maecenas lorem lacus, luctus eget nunc ultricies, dapibus commodo felis. Duis dignissim orci nulla, semper mollis diam viverra in. Pellentesque tempor nulla sit amet erat lobortis mollis. Etiam imperdiet pellentesque nunc, nec auctor libero aliquet a. Donec ultrices et orci ut posuere.',
    'Fusce a rutrum tortor, id interdum diam. Maecenas fermentum purus ut diam porttitor, sed ornare leo ultricies. Duis quis ligula non ipsum condimentum laoreet in vel leo. Proin tincidunt ex sed hendrerit ultricies. Praesent ut lectus id mauris eleifend facilisis eu id tortor. Aenean tempor magna quis nibh convallis, eget lacinia neque pulvinar. Suspendisse accumsan, tellus facilisis vestibulum dignissim, nunc elit consequat ligula, nec efficitur metus leo non ligula. Integer pellentesque lacus ac maximus dictum. Suspendisse commodo vehicula leo. Nullam vel purus mauris. Ut nec vulputate est. Mauris vel metus sodales, suscipit mauris id, tempor urna. Praesent finibus, leo vel suscipit venenatis, massa augue euismod est, eget dictum elit arcu vel sem. Aliquam est ligula, luctus quis sodales quis, malesuada at tortor.',
    'Duis vitae elit dolor. Mauris sagittis interdum lacus tincidunt cursus. Praesent cursus vel libero ac suscipit. Sed suscipit consectetur tellus ac blandit. Vivamus in ex mauris. Nullam vitae elit eget ante pulvinar facilisis venenatis nec diam. Maecenas malesuada lobortis auctor. Maecenas aliquet justo neque, ut egestas leo imperdiet in. Maecenas tempor sem sit amet dui imperdiet egestas. Vestibulum fermentum at ante a imperdiet. Suspendisse a orci euismod, dictum ipsum in, volutpat magna.',
    'Ut ac accumsan sem, quis auctor justo. Cras sed neque enim. Morbi sollicitudin lacus non est luctus ornare. Ut pharetra bibendum cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin auctor arcu, in auctor leo pellentesque non. Suspendisse eleifend euismod ante, blandit porttitor felis. Aliquam aliquam elementum odio et malesuada. Donec faucibus et ante sed mattis. Nullam elementum, justo at bibendum vulputate, quam metus tristique sem, eget pulvinar lectus dui at augue. Sed feugiat, metus nec iaculis ultrices, ex augue iaculis justo, sit amet pretium est tortor a risus. Aenean gravida augue at tellus tincidunt hendrerit. Nulla iaculis elementum ex vitae varius.',
    'Phasellus nec nulla dapibus leo posuere condimentum eu a nulla. Pellentesque id mollis ex, ut vehicula mi. Ut sodales malesuada felis, sed semper odio finibus quis. Vestibulum ullamcorper sed dui a iaculis. Maecenas porta lacus vitae nibh finibus dapibus. Nullam viverra et ipsum eget eleifend. Cras venenatis condimentum nisl, sit amet vulputate lacus congue quis.'
];

const wordArr = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'Nulla',
    'quis'
];

const form = document.querySelector('.form');
const range = document.querySelector('#numOfParaRange');
const number = document.querySelector('#numOfPara');
const result = document.querySelector('.lorem-text');

const paras = document.querySelector('#paras');
const words = document.querySelector('#words');
const selectOption = document.querySelector('#selectOption');

function syncParaNumbers(e) {
    const value = e.target.value;

    range.value = value;
    number.value = value;
}

number.addEventListener('input', syncParaNumbers)
range.addEventListener('input', syncParaNumbers)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt(number.value);
    let tempText = paraArr.slice(0, value);
    let tempWord = wordArr.slice(0, value);

    if (selectOption.selectedIndex == 0) {
        tempText = tempText.map(item => {
            return `<p class="result"> ${item}</p>`
        }).join("");
        result.classList.remove('result-word');
        result.innerHTML = tempText;
    }
    else {
        tempWord = tempWord.map(item => `<p class="">${item}</p>`).join("");
        result.classList.add('result-word');
        result.innerHTML = tempWord;
    }
});
