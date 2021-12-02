const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]
  
  const contarOvejas = (ovejas) => {
      const arr = [...ovejas];

      arr.filter(result => (((result.name.toLowerCase().trim())).includes('a' && 'n') && result.color == 'rojo'));
      return ovejas;
  }
  
  const ovejasFiltradas = contarOvejas(ovejas)
  console.log(ovejasFiltradas)
  