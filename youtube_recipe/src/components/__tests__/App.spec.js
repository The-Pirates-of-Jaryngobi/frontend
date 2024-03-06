// App.spec.js
import { render } from '@testing-library/vue';
import App from '@/App.vue';

test('renders a message', () => {
    const { getByText } = render(App);
    expect(getByText('Wellcome')).toBeInTheDocument();
});
