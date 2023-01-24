// console.log('conectado')

// getElementsByClassName
// getElementByClassName
// getElementByID
// querySelector

// const ulElementById = document.getElementById('categories')
const ulQuerySelector = document.querySelector("#categories");
// const lifromQuerySel = document.querySelector('.item')

// console.log(ulElementById)
// console.log(ulQuerySelector)
// console.log(lifromQuerySel)

const childrenFromCateogies = Array.from(ulQuerySelector.children);

// console.log(typeof(childrenFromCateogies))

// console.log(childrenFromCateogies)

console.log("Number of categories", ulQuerySelector.children.length);
childrenFromCateogies.map((el) => {
  let qtyOfElems = 0;
  const childrenOfElinArr = el.children;

  Array.from(childrenOfElinArr).map((el) => {
    if (el.children.length === 0) {
      qtyOfElems = qtyOfElems + 1;
      // console.log('caso h2', qtyOfElems)
    } else {
      // console.log(el.children, 'otros casos')
      qtyOfElems = qtyOfElems + el.children.length;
      // console.log(qtyOfElems)
    }
  });

  console.log("Category:", el.firstChild.nextSibling.innerText);
  console.log("Elements:", qtyOfElems);

  // console.log(childrenOfElinArr[0].children.length)
  // como no tiene hijos deberia sumar 1 a mi variable

  // console.log(childrenOfElinArr[1].children.length)
});

// childrenFromCateogies.map((el)=> console.log(el.children.length))

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

child.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});
