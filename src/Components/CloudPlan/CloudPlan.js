import head from '../head';
import cloudplans from '../plan';
import PlanCard from '../PlanCard/PlanCard'
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    wrapper:{
        width: "100%",
        height: "400px",
        margin:"0",
        background:"linear-gradient(to right, #6905b7 0%, #355aee 100%)",
    },
    heading:{
        width:"65%",
        height:"50%",
        margin:"auto",
        paddingTop:"40px",
        "& h2":{
            margin:"0",
            color:"white"
        },
        "& p":{
            textAlign:"center",
            margin:"auto",
            paddingTop:"30px",
            color:"white"
        }
    },
    cardWrapper:{
        height:"100%",
        padding:"0 50px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})
let order = null;
function CloudPlan() {
    const classes = useStyles();
    return (
      <div className={classes.wrapper}>
          <div className={classes.heading}>
              <h2>{head.name}</h2>
              <p>{head.text}</p>
          </div>
          <div className={classes.cardWrapper}>
                {
                    cloudplans.map((planitm,index) => 
                     <PlanCard key = {index}
                        plan ={planitm.plan} 
                        price={planitm.price} 
                        text={planitm.text}
                        storage={planitm.storage}
                        dataTransfer={planitm.dataTransfer}
                        panel={planitm.panel}
                        support={planitm.support}
                        themes={planitm.themes}
                        others={planitm.others}
                        tag={planitm.tag} />
                    )
                }
            </div>
            <div></div>
      </div>
    );
}
export default CloudPlan;