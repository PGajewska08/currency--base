export const convertPLNToUSD = (PLN) => {

  if(typeof PLN === 'number' && PLN>0){
    const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
  
  else if(typeof PLN ==='string') {
    return(NaN);
  }
  
  else if ( PLN === undefined){
    return(NaN);
  }
  
  else if(PLN < 0){
    return('$0.00');
  }
  
  else {
    return('Error');
  }
}