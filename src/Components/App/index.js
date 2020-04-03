import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        numberSelected: state.numberSelected,
    }
}

export default connect(mapStateToProps)(App);