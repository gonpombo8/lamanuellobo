import qs from 'qs';
import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import { Link } from 'react-router';
import { DateRangePicker } from 'react-dates';

import 'react-select/dist/react-select.css';
import 'react-dates/lib/css/_datepicker.css';

import Row from '../components/row';
import Title from '../components/title';

const options = [
    { value: 0, label: 0 },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 }
];



class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
      adults: 2,
      children: 0,
      infants: 0,
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.linkTo = this.linkTo.bind(this);
    this.isValid = this.isValid.bind(this);
    this.onChangeForm = this.onChangeForm.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  onChangeForm(name) {
    return (e) => {
      const changeValue = {};
      changeValue[name] = e.value;
      this.setState(changeValue);
    }
  }

  isValid() {
    const { startDate, endDate } = this.state;
    return startDate && endDate;
  }

  linkTo() {
    if (!this.isValid()) return;
    const { startDate, endDate, adults, children, infants } = this.state;
    const form = {
      arrivalDate: startDate.format('YYYY-MM-DD'),
      nights: endDate.diff(startDate, 'days'),
      selectedAdultCount: adults,
      selectedChildCount: children,
      selectedInfantCount: infants
    }
    return `https://www.secure-hotel-booking.com/Posada-Manuel-de-Lobo/2ALU/search?${qs.stringify(form)}`;
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <Row>
        <div style={{ height: '510px' }}>
          <Title title="Reservas" />
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-6 col-centered">
              <div className="ml40">
                <DateRangePicker
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={focusedInput}
                  startDate={startDate}
                  startDatePlaceholderText="Check In"
                  endDatePlaceholderText="Check out"
                  required
                  endDate={endDate}
                />
              </div>
            </div>
          </div>
          <div className="row mt30">
            <div className="col-sm-offset-1 col-md-3 col-sm-3 col-md-offset-1 col-lg-2 text-center col-lg-offset-3">
              <label className="uppercase">Adultos</label>
              <Select
                name="adults"
                value={this.state.adults}
                clearable={false}
                onChange={this.onChangeForm('adults')}
                options={options}/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 text-center">
              <label className="uppercase">Niños</label>
              <Select
                name="children"
                value={this.state.children}
                clearable={false}
                onChange={this.onChangeForm('children')}
                options={options}/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 text-center">
              <label className="uppercase">Bebes</label>
              <Select
                name="infants"
                clearable={false}
                value={this.state.infants}
                onChange={this.onChangeForm('infants')}
                options={options}/>
            </div>
          </div>
          <div className="row mt30">
            <div className="col-lg-3 col-centered">
              <div className="form-group col-lg-12 text-center">
                <Link to={this.linkTo()} className={classnames({mute: !this.isValid()})} target="_blank"><button type="submit" className="btn btn-info">Reservar <span className="glyphicon glyphicon-send"></span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </Row>
    )
  }
}

export default Book;
