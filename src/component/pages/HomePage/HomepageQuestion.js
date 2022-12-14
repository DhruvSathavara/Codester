import React from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


import { makeStyles, withStyles } from '@material-ui/core/styles';



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function HomePageQuestion() {

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  



  return (
    <div
      className="tab-pane fade show active"
      id="questions"
      role="tabpanel"
      aria-labelledby="questions-tab"
    >
      <div className="filters d-flex align-items-center justify-content-between pb-4">
        <h3 className="fs-17 fw-medium">All Questions</h3>
        <div className="filter-option-box w-20">
          <FormControl  variant="outlined" size="small" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Newest</InputLabel>
            <Select
              native
              // value={state.age}
              onChange={handleChange}
              label="Newest"
              inputProps={{
                name: 'Newest',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>Newest</option>
              <option value={2}>Bountied</option>
              <option value={3}>Frequent</option>
              <option value={4}>Votes</option>
              <option value={5}>Unanswered</option>
              <option value={6}>Active</option>
            </Select>
          </FormControl>

        </div>
      </div>
      <div className="question-main-bar">
        <div className="questions-snippet">
          <div className="media media-card media--card align-items-center">
            <div className="votes">
              <div
                className="vote-block d-flex align-items-center justify-content-between"
                title="Votes"
              >
                <span className="vote-counts">0</span>
                <span className="vote-icon" />
              </div>
              <div
                className="answer-block d-flex align-items-center justify-content-between"
                title="Answers"
              >
                <span className="vote-counts">0</span>
                <span className="answer-icon" />
              </div>
            </div>
            <div className="media-body">
              <h5>
                <a href="question-details.html">
                  css resizeable div position different sizes
                </a>
              </h5>
              <small className="meta">
                <span className="pr-1">1 hour ago</span>
                <a href="user-profile.html" className="author">
                  edublog
                </a>
              </small>
              <div className="tags">
                <a href="#" className="tag-link">
                  css
                </a>
                <a href="#" className="tag-link">
                  bootstrap-4
                </a>
                <a href="#" className="tag-link">
                  grid
                </a>
                <a href="#" className="tag-link">
                  resize
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="pager d-flex flex-wrap align-items-center justify-content-between pt-30px">
          <div>
            <nav aria-label="Page navigation example">
              <ul className="pagination generic-pagination pr-1">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i className="la la-arrow-left" />
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="la la-arrow-right" />
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <p className="fs-13 pt-3">
              Showing 1-15 results of 50,577 questions
            </p>
          </div>
          <FormControl  variant="outlined" size="small" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">10 per page</InputLabel>
            <Select
              native
              // value={state.age}
              onChange={handleChange}
              label="10 per page"
              inputProps={{
                name: '10 per page',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>10 per page</option>
              <option value={2}>15 per page</option>
              <option value={3}>20 per page</option>
              <option value={4}>30 per page</option>
              <option value={5}>40 per page</option>
              <option value={6}>50 per page</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default HomePageQuestion;