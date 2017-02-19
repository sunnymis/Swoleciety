mkdir app/components/$1
mkdir app/components/$1/tests
touch app/components/$1/$1.js
touch app/components/$1/$1.scss
touch app/components/$1/tests/$1.test.js

echo "import React from 'react';

require('./$1.scss');

const $1 = () => {
  return (
  );
};

$1.defaultProps = {
};

$1.propTypes = {
};

export default $1;" >> app/components/$1/$1.js

echo "@import '../../style/colors';

.$1 {
}" >> app/components/$1/$1.scss

echo "import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import $1 from '../$1';

describe('<$1 />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<$1 />);
    expect(wrapper.find('div')).toBePresent();
  });
  
});" >> app/components/$1/tests/$1.test.js