import React, { memo } from 'react';

const Congratulations = memo(() => (
  <p className="t-congratulation">
    <span role="img" aria-label="congratulations!">
      🎉
    </span>
    Поздравляем!{' '}
    <span role="img" aria-label="congratulations!">
      🎉
    </span>
    <br /> Вы вошли в систему!
  </p>
));

export default Congratulations;
