import React from 'react';
import './index.scss'
import { Accordion, List } from 'antd-mobile';
class Page extends React.Component {
    onChange = (key) => {
        console.log(key);
      }
   render(){
       return(
           <div><div className="top-pic">
               <img src="https://st-cn.meishij.net/r/237/94/4336237/s4336237_143764257094381.jpg" alt=""/></div>
               <div className="top-page">
                   <h1>葱烧海参</h1>
                   <span className="main">by hi匆匆　597 收藏　30412 浏览</span>
                   <div className="middle">
                       <div className="middle-left">
                           <div className="left-item">
                               <strong>碳水化合物</strong>
                               <div className="jsw">
                                   <div className="jd"></div>
                               </div>
                           </div>
                           <div className="left-item">
                               <strong>脂肪</strong>
                               <div className="jsw">
                                   <div className="jd"></div>
                               </div>
                           </div>
                           <div className="left-item">
                               <strong>蛋白质</strong>
                               <div className="jsw">
                                   <div className="jd"></div>
                               </div>
                           </div>
                           <div className="left-item">
                               <strong>钙</strong>
                               <div className="jsw">
                                   <div className="jd"></div>
                               </div>
                           </div>
                           <div className="left-item">
                               <strong>铁</strong>
                               <div className="jsw">
                                   <div className="jd"></div>
                               </div>
                           </div>
                       </div>
                       <div className="middle-right">
                           
                           <div className="circle_box">
                               <span>卡路里</span>
                               <strong>11.5%</strong>
                           </div>
                           <div className="circle_box">
                           <span>蛋白质</span>
                               <strong>10.8%</strong>
                           </div>
                       </div>
                  
                   </div>
                   <div className="data">*tips: 中国居民每日推荐摄入营养所得占比数据</div>
                   <div className="mian-pic">
                       <img src="https://st-cn.meishij.net/p2/20201030/20201030173432_335.jpg" alt=""/>
                   </div>
                   <div className="cpargsw">
                       <div className="cpargs cpargs2">
                           <div className="i">烧</div>

                       </div>
                       <div className="cpargs cpargs3">
                           <div className="i">葱香味</div>
                           
                       </div>
                       <div className="cpargs cpargs4">
                           <div className="i">10分钟</div>
                           
                       </div>
                       <div className="cpargs cpargs5">
                           <div className="i">较低热量</div>
                           
                       </div>
                       <div className="cpargs cpargs6">
                           <div className="i">
					初中水平				</div>
                           
                       </div>
                       
                   </div>
                   <div className="cpdesw showOpenbtn">
                   今天为大家推荐的【海参的家常做法】是葱烧海参
      大概两年前身体出了一些问题，做了一个大手术，医生建议术后吃点海参以帮助身体恢复后，从此与海参结缘，到现在吃成了一个大胖子，再到后来成了一个野生海参的搬运，时常有顾客让我帮忙鉴别一下手头海参的好坏，我一般都会在照片里帮忙鉴别一下，感谢朋友们对我的信任。从顾客到成为朋友，这种感觉是挺奇妙的。也常有人会问我怎么做海参比较好吃，现在就为大家献上一些海参的家常作法，如果想看更多的菜谱可以看我朋友圈 xyw7678。海参的营养价值超高的，大人儿童孕妇老人病人吃这个对身体都特别好。
      而这葱烧海参是中华特色美食，鲁菜经典名菜。葱香味醇，营养丰富，滋肺补肾。
                   </div>
                   <div className="c_mtr_t">
                       主料
                       <span>两人份</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">五花肉</span>
                       <span className="a">200克</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">白菜</span>
                       <span className="a">适量</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">粉条</span>
                       <span className="a">适量</span>
                   </div>
                   <div className="c_mtr_t">
                       辅料
                       
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">老抽</span>
                       <span className="a">1勺</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">生抽</span>
                       <span className="a">2勺</span>
                   </div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}> 
          <Accordion.Panel header="展开全部" className="pad">
          <div className="c_mtr_li">
                       <span className="t">盐</span>
                       <span className="a">1勺</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">干辣椒</span>
                       <span className="a">适量</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">姜</span>
                       <span className="a">适量</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">蒜</span>
                       <span className="a">适量</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">料酒</span>
                       <span className="a">1勺</span>
                   </div>
                   <div className="c_mtr_li">
                       <span className="t">大料</span>
                       <span className="a">适量</span>
                   </div>
          </Accordion.Panel>
        </Accordion>
       
      </div> 
      </div><div className="step_title"><img src="https://st-cn.meishij.net/rs/00/00//n_154450692277184.jpg" alt=""/>
        <h2>五花肉200克焯水备用</h2></div>
        <div className="step_title"><img src="https://st-cn.meishij.net/rs/00/00//n_154450692549923.jpg" alt=""/>
        <h2>锅内热油，倒入姜，蒜，干辣椒爆香</h2></div>
        <div className="step_title"><img src="https://st-cn.meishij.net/rs/00/00//n_154450692775176.jpg" alt=""/>
      </div>
      
      </div>
       )
   }
}
export default Page