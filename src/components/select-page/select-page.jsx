import React from 'react';
import './select-page.css';
import { Result } from '../result-page/result-page';

export class SelectValuePage extends React.Component {
  constructor() {
    super();
    this.state = {
      oldWidth: 145,
      oldHeight: 25,
      oldDiameter: 12,
      newWidth: 145,
      newHeight: 25,
      newDiameter: 12
    }
    const arr = [
      [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325],
      [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
      [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    ];
    this.arr = arr;
  }

  onOptionChange0(event) {
    this.setState({oldWidth: +event.target.value })
  }

  onOptionChange1(event) {
    this.setState({oldHeight: +event.target.value })
  }

  onOptionChange2(event) {
    this.setState({oldDiameter: +event.target.value })
  }

  onOptionChange3(event) {
    this.setState({newWidth: +event.target.value })
  }

  onOptionChange4(event) {
    this.setState({newHeight: +event.target.value })
  }

  onOptionChange5(event) {
    this.setState({newDiameter: +event.target.value })
  }

  changePage(page) {
    this.setState({ page });
  }


  render() {
    const tags0 = this.arr[0].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags1 = this.arr[1].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags2 = this.arr[2].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )

    const tags3 = this.arr[0].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags4 = this.arr[1].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags5 = this.arr[2].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )

    if (this.state.page === 'select-value') {
      return (
        <SelectValuePage onClick={() => this.changePage('result')}/>
      );
    }
    if (this.state.page === 'result') {
      return (
        <Result
          {...this.state}
        />
      );
    }

    let widthDiff = this.state.newWidth - this.state.oldWidth;
    if (widthDiff > 0) {
      widthDiff = `+${widthDiff}`;
    }
    else {
      widthDiff = `${widthDiff}`;
    }

    let heightDiff = this.state.newHeight - this.state.oldHeight;
    if (heightDiff > 0) {
      heightDiff = `+${heightDiff}`;
    }
    else {
      heightDiff = `${heightDiff}`;
    }

    let diameterDiff = this.state.newDiameter - this.state.oldDiameter;
    if (diameterDiff > 0) {
      diameterDiff = `+${diameterDiff}`;
    }
    else {
      diameterDiff = `${diameterDiff}`;
    }

    return (
      <div id='container'>
        <div id='select-page'>
          <div className='select-value'>
            <div className='old-size'>
              <p className='title-select'>Початковий розмір</p>
              <div className='select-conteiner'>
                <select className='select-item' value={this.props.value} onChange={this.onOptionChange0.bind(this)}>
                  <button>
                    <selectedcontent></selectedcontent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {tags0}
                </select>
                &nbsp;/&nbsp;
                <select className='select-item' value={this.props.value} onChange={this.onOptionChange1.bind(this)}>
                  <button>
                    <selectedcontent></selectedcontent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {tags1}
                </select>
                &nbsp;R&nbsp;
                <select className='select-item' value={this.props.value} onChange={this.onOptionChange2.bind(this)}>
                  <button>
                    <selectedcontent></selectedcontent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {tags2}
                </select>
              </div>
            </div>

            <div className='new-size'>
              <p className='title-select'>Новий розмір</p>
              <div className='select-conteiner'>
                <select className='select-item' value={this.props.value} onChange={this.onOptionChange3.bind(this)}>
                  <button>
                    <selectedcontent></selectedcontent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {tags3}
                </select>
                &nbsp;/&nbsp;
                <select className='select-item' value={this.props.value} onChange={this.onOptionChange4.bind(this)}>
                  <button>
                    <selectedcontent></selectedcontent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {tags4}
                </select>
                &nbsp;R&nbsp;
                <select className='select-item' value={this.props.value} onChange={this.onOptionChange5.bind(this)}>
                  <button>
                    <selectedcontent></selectedcontent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {tags5}
                </select>
                </div>
            </div>
          </div>

          <div className='horizontal-line'>
            <p className='heder-chenges'>Зміни</p>
          </div>

          <div className='visual-value' >
            
            <div className='old-width'>
              {this.state.oldWidth} мм
            </div>

            <div className='new-width'>
              {this.state.newWidth} мм ({widthDiff})
            </div>

            <div className='old-height'>
              {this.state.oldHeight} %
            </div>

            <div className='new-height'>
              {this.state.newHeight} % ({heightDiff})
            </div>

            <div className='old-diameter'>
              R {this.state.oldDiameter} "
            </div>

            <div className='new-diameter'>
              R {this.state.newDiameter} " ({diameterDiff})
            </div>

          </div>
        </div>
        <div className='basement'>
          <button className='button button-select' onClick={() => this.changePage('result')}>Розрахувати</button>
        </div>
      </div>
    );
  }
}
