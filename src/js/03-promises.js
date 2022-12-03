import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('form'),
}

refs.formEl.addEventListener('submit', onStart);

function onStart(e) {
  e.preventDefault();
  
  let delay = Number(refs.formEl.elements.delay.value);
  const step = Number(refs.formEl.elements.step.value);
  const amount = refs.formEl.elements.amount.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  );
};