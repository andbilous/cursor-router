import React,{Component} from 'react';


class Contact extends Component {

  setIcon(gender){
    if(!gender){
      return ''
    }
    if(gender==='male'){
      return 'fa fa-male';
    }
    return 'fa fa-female'
  }
render(){
  
  const {firstName, lastName, phone, gender} = this.props.contact;
return (
<div onClick={()=> console.log('User Click')} style={{width:'50%'}}>
<div>{firstName}</div>
<div>{lastName}</div>
<div>{phone}</div>
<div>{<i className={this.setIcon(gender)}/>}</div>

<hr/>
  </div>
)
  
}
}
export default Contact;