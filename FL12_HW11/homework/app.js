const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
const none = 'none';
const folder = 'folder';
const folder_open = 'folder_open';
const empty = 'Folder is empty';
const circle = 'play_circle_outline';
createTree(rootNode, structure);

function createTree(rootNode, structureArray, value = '') {
  for (let i = 0; i < structureArray.length; i++) {
    let currentNode = createSubTree(structureArray[i]);
    rootNode.append(currentNode);
    if (structureArray[i].children) {
      createTree(currentNode, structureArray[i].children, none);
    } else if (structureArray[i].folder) {
      currentNode.append(createSubTree());
    }
    currentNode.style.display = value;
  }
}

function createSubTree(obj = null) {
  let point = document.createElement('div');
  let component = document.createElement('div');
  
  if(obj){
    component.textContent = obj.title;
  } else {
    component.textContent = empty;
  }
  component.classList.add('highlight');
  point.classList.add('node');
  point.addEventListener('click', callbackOpenFolder);
  point.append(component);
  
  if(obj) {
    let svg = document.createElement('i');
    svg.classList.add('material-icons');
    if(obj.folder) {
      svg.textContent = folder;  
    } else {
      svg.textContent = circle;
    }
    point.prepend(svg);
  } else {
    point.style.display = none;
  }
  return point;
}

function callbackOpenFolder(e) {
  stopPropagation(e);
  for (let i = 0; i < e.currentTarget.children.length; i++){
    if(e.currentTarget.children[i].classList.contains('node')) {
      if(none === e.currentTarget.children[i].style.display) {
        e.currentTarget.children[i].style.display = '';
      } else {
        e.currentTarget.children[i].style.display = none;
      }
    }
  }
  let svg = e.currentTarget.firstChild;
  if (folder === svg.textContent) {
    svg.textContent = folder_open;
  } else if (folder_open === svg.textContent) {
    svg.textContent = folder;
}

function stopPropagation(e) {
  e.stopPropagation();
}
}