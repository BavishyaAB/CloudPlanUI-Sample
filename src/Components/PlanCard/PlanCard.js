import {createUseStyles} from 'react-jss';
const useStyles = createUseStyles({
    planCard:{
        width:"300px",
        height:"450px",
        backgroundColor:"white",
        padding:"0 15px 20px",
        border:"1px solid #f9f9f9",
        boxSizing: "border-box",
    },
    priceBox:{
        border:"1px solid #f9f9f9",
        width:"200px",
        height:"100px",
        margin:"auto",
        backgroundColor:"#02bcd5",
        "& p":{
            color:"white",
            padding:"20px",
            margin:"0",
            textAlign:"center",
            fontSize:"1.2em"
        }
    },
    textBox:{
        margin:"25px",
        "& p":{
            fontSize:"0.75em"
        }
    },
    list:{
        margin:"0",
        "& ul":{
            listStyleType:"none"
        },
        "& li":{
            textAlign:"left",
            paddingBottom:"4px",
        }
    },
    btn:{
        borderColor:"transparent",
        backgroundColor:"#02bcd5",
        color:"white",
        fontSize:"1em",
        padding:"15px"
    }
})
function PlanCard({plan,price,text,storage,dataTransfer,panel,support,themes,others,tag}) {
    const classes = useStyles();
    return (
      <div className={classes.planCard}>
            <div>
              <h4>{plan}</h4>
            </div>
            <div className={classes.priceBox}>
              <p>{price.split(" ",1)}<br></br>{price.split(" ").pop()}</p>
            </div>
            <div className={classes.textBox}>
              <p>{text}</p>
            </div>
            <div className={classes.list}>
                <ul>
                    <li>&#10003;&nbsp;{storage}</li>
                    <li>&#10003;&nbsp;{dataTransfer}</li>
                    <li>&#10003;&nbsp;{panel}</li>
                    <li>&#10003;&nbsp;{support}</li>
                    <li>&#10003;&nbsp;{themes}</li>
                    <li>&#10003;&nbsp;{others}</li>
                </ul>
            </div>
            <button className={classes.btn}>{tag}</button>
      </div>
    );
  }
  
  export default PlanCard;