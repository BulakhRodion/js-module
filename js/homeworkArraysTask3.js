let stylesArr = [
    {
      name: "font-weght",
      value: 400,
    },
    {
      name: "color",
      value: "red",
    },
    {
      name: "text-transform",
      value: "uppercase",
    },
    {
      name: "font-size",
      value: "60px",
    },
    {
      name: "text-align",
      value: "center",
    },
  ];
  const setStyles = (array, text) => {
    let addStyle = `<p style="`;
    for (let i in array){   
      addStyle+=`${array[i].name}: ${array[i].value};\n`;
    }
    addStyle+=`"> ${text} </p>`;
    document.write(addStyle);
  }
  setStyles(stylesArr, 'Test sentence');