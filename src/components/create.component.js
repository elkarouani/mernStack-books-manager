import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeAutorName = this.onChangeAutorName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_tile: '',
            author_name: '',
            price: 0
        }
    }
    onChangeBookTitle(e) {this.setState({book_tile: e.target.value})}
    onChangeAutorName(e) {this.setState({author_name: e.target.value})}
    onChangePrice(e) {this.setState({price: e.target.value})}
    onSubmit(e) {
        e.preventDefault();
        console.log(`the values are ${this.state.book_tile}, ${this.state.author_name}, and ${this.state.price}`)
        this.setState({ book_tile: '', author_name: '', price: 0 })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Book Title:  </label>
                        <input type="text" className="form-control" value={this.state.book_title} onChange={this.onChangeBookTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Add Author Name: </label>
                        <input type="text" className="form-control" value={this.state.author_name} onChange={this.onChangeAutorName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Price: </label>
                        <input type="number" className="form-control" value={this.state.price} onChange={this.onChangePrice}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save it" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}