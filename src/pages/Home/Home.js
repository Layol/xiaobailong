// import './App.css';
import React, { useState } from 'react';
import { Button ,Divider, Table,Modal} from 'antd';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { Link } from 'react-router-dom';
import withRouter from '../../components/withRouter';





const columns = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '股票涨幅',
    dataIndex: 'ZHANGFU',
     render: (text) => {
   
      console.log('row', text);
      return (
        <div
          style={{
            color: text < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '个股热度',
    dataIndex: 'GEGUREDU',
   
  
  },
  {
    title: '时间',
    dataIndex: 'SHIJIAN',
  },
]; 
const columns_long_hu_bang = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '股票涨幅',
    dataIndex: 'zhangfu',
     render: (text) => {
      var sad= new String(text).replace('%',"")
      var asds =parseInt(sad)
      return (
        <div
          style={{
            color: asds < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'xianjia',
   
  
  },
  {
    title: '时间',
    dataIndex: 'shijain',
  },
  {
    title: '上榜原因',
    dataIndex: 'yuanying',
  },
]; 
const columns_chi_xu_fang_liang = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '股票涨幅',
    dataIndex: 'zhangfu',
     render: (text) => {
      console.log('row', text);
      return (
        <div
          style={{
            color: text < 0 && '#24b39b' || '#ff0000'
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'xianjie',
   
  
  },
  {
    title: '放量',
    dataIndex: 'fangliang',
   
  
  },
  {
    title: '连续放量天数',
    dataIndex: 'lxfangliang',
   
  
  },
  
  {
    title: '阶段涨幅',
    dataIndex: 'jiduanzhangfu',
  },
  {
    title: '时间',
    dataIndex: 'shijian',
  }
]; 
const columns_ge_gu_zijin = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '股票涨幅',
    dataIndex: 'zhangfu',
     render: (text) => {
      console.log('row', text);
      return (
        <div
          style={{
            color: text < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'xianjie',
   
  
  },
  {
    title: '换手率',
    dataIndex: 'haungshoulv',
  },
  {
    title: '时间',
    dataIndex: 'shijian',
  },
 
]; 


const columns_liang_jia_qi_sheng = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '股票涨幅',
    dataIndex: 'zhangfu',
     render: (text) => {
      console.log('row', text);
      return (
        <div
          style={{
            color: text < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'xianjia',
   
  
  },
  {
    title: '量价齐升天数',
    dataIndex: 'qishengtiansheng',
  },
  {

    title: '换手率',
    dataIndex: 'huanshoulv',
  },
  {
    title: '时间',
    dataIndex: 'shijian',
  },
 
]; 
const columns_lian_xu_shang_zheng = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '连续上涨天数',
    dataIndex: 'qishengtiansheng',
     render: (text) => {
      var sad= new String(text)
      var asds =parseInt(sad)
      return (
        <div
          style={{
            color: text < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'xianjia',
   
  
  },
  {
    title: '连续涨幅',
    dataIndex: 'lianxizhangfu',
  },
  {

    title: '换手率',
    dataIndex: 'huanshoulv',
  },
  {
    title: '时间',
    dataIndex: 'shijian',
  },
 
]; 
const columns_chuang_xin_gao_m = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '涨幅',
    dataIndex: 'zhangfu',
     render: (text) => {
      var sad= new String(text)
      var asds =parseInt(sad)
      return (
        <div
          style={{
            color: text < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'zuixinjia',
   
  
  },
  
  {

    title: '换手率',
    dataIndex: 'huanshoulv',
  },
  {
    title: '时间',
    dataIndex: 'shijian',
  },
 
]; 
const columns_chuang_xin_gaoby = [
  {
    title: '股票代码',
    dataIndex: 'GUPIAODAIMA',
  },
    {
    title: '股票名称',
    dataIndex: 'GUPIAOJIANCHENG',
  },
    {
    title: '涨幅',
    dataIndex: 'zhangfu',
     render: (text) => {
      var sad= new String(text)
      var asds =parseInt(sad)
      console.log('row', text);
      return (
        <div
          style={{
            color: asds < 0  && '#24b39b' || '#ff0000',
          }}
        >
          {text}
        </div>
      );
     } },
  {
    title: '现价',
    dataIndex: 'zuixinjia',
   
  
  },
  
  {

    title: '换手率',
    dataIndex: 'huanshoulv',
  },
  {
    title: '时间',
    dataIndex: 'shijian',
  },
 
];


class Home extends React.Component{ 
  
  state = { visible: false };

  showModal = () => {
      this.setState({
          visible: true,
      });
  };

  handleOk = e => {
      console.log(e);
      this.setState({
          visible: false,
      });
  };

  handleCancel = e => {
      console.log(e);
      this.setState({
          visible: false,
      });
  };

  constructor(){
    super();
   
    this.state = {
        openWIn:"http://image2.sinajs.cn/newchart/daily/n/sh601669.gif",
        banners: [''],
        longhubang:[''],
        chixufangliang:[''],
        geguzijin:[''],
        lianjiaqisheng:[''],
        lianxushangzheng:[''],
        chuangxingaoM:[''],
        chuangxingaoBY:[''],
        chuangxingaoY:[''],
        chuangxingaoL:['']

    } 
}
openWInsss="http://image2.sinajs.cn/newchart/daily/n/"
openWIns=""
  componentDidMount(){

    fetch("http://127.0.0.1:5000/renqibang1").then(res=>res.json()).then((data)=>{
      this.setState({
        banners:data.renqibang
    })
    this.setState({
      longhubang:data.longhubang
    })
    this.setState({
      chixufangliang:data.chixufangliang
    })
    this.setState({
    geguzijin:data.geguzijin
    })
    this.setState({
     lianjiaqisheng:data.lianjiaqisheng
    })
    this.setState({
      lianxushangzheng:data.lianxushangzheng
        })
    this.setState({
         chuangxingaoM:data.chuangxingaoM
            })
    this.setState({
          chuangxingaoBY:data.protocols_chuangxingaoBY
            })  
     this.setState({
              chuangxingaoY:data.protocols_chuangxingaoY
                })   
     this.setState({
            chuangxingaoL:data.protocols_chuangxingaoL
                    })       
    }).catch((err)=>{
     
    }) 
  }
//  chuangxingaoM:data.chuangxingaoM
  
  render() {
    return (
    
  
  <body> 
  <div style={{marginLeft:"10%",marginTop:"10px"}}>
    <Button  style={{marginLeft:"10px"}} type="primary" onClick={()=>{this.props.router.navigate('/demo')}}>跳转示例</Button>
    <Link to="/demo">链接示例</Link>
    <Button  style={{marginLeft:"10px"}} type="primary" onClick={()=>{window.location.href="/index.html"}}>Primary Button</Button>
    <Button onClick={()=>{window.location.href="/wdokosd.html"}} style={{marginLeft:"10px"}} >Default Button</Button>
    <Button style={{marginLeft:"10px"}}  type="dashed">Dashed Button</Button>
    <Button style={{marginLeft:"10px"}}  type="text">Text Button</Button>
    <Button style={{marginLeft:"10px"}}  type="link">Link Button</Button>
    <Button  style={{marginLeft:"10px"}} type="primary" onClick={()=>{window.location.href="/index.html"}}>Primary Button</Button>
    <Button onClick={()=>{window.location.href="/wdokosd.html"}} style={{marginLeft:"10px"}} >Default Button</Button>
    <Button style={{marginLeft:"10px"}}  type="dashed">Dashed Button</Button>
    <Button style={{marginLeft:"10px"}}  type="text">Text Button</Button>
    <Button style={{marginLeft:"10px"}}  type="link">Link Button</Button>
    </div>
    <div style={{marginLeft:"10%",marginTop:"10px"}}>
    <Button  style={{marginLeft:"10px"}} type="primary">Primary Button</Button>
    <Button style={{marginLeft:"10px"}} >Default Button</Button>
    <Button style={{marginLeft:"10px"}}  type="dashed">Dashed Button</Button>
    <Button style={{marginLeft:"10px"}}  type="text">Text Button</Button>
    <Button style={{marginLeft:"10px"}}  type="link">Link Button</Button>
    <Divider>人气榜</Divider>
    <Table columns={columns} dataSource={ this.state.banners} size="small" 
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    />
    <Divider>龙虎榜</Divider>
    <Table columns={columns_long_hu_bang} dataSource={this.state.longhubang} size="small"
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    ></Table>
    <Divider>持续放量</Divider>
    <Table columns={columns_chi_xu_fang_liang} dataSource={this.state.chixufangliang} size="small"
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    ></Table>
    <Divider>个股资金排行</Divider>
    <Table columns={columns_ge_gu_zijin} dataSource={this.state.geguzijin} size="small"
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    ></Table>
    <Divider>量价齐升</Divider>
    <Table columns={columns_liang_jia_qi_sheng} dataSource={this.state.lianjiaqisheng} size="small"
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    ></Table>
    <Divider>连续上涨</Divider>
    <Table columns={columns_lian_xu_shang_zheng} dataSource={this.state.lianxushangzheng} size="small"
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    ></Table>
    <Divider>创一月之内新高</Divider>
    <Table columns={columns_chuang_xin_gao_m} dataSource={this.state.chuangxingaoM} size="small"
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    ></Table>
    <Divider>创半年之内新高</Divider>
    <Table columns={columns_chuang_xin_gaoby} dataSource={this.state.chuangxingaoBY} 
     onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })}
    size="small"></Table>
    <Divider>历史新高</Divider>
    <Table columns={columns_chuang_xin_gaoby} dataSource={this.state.chuangxingaoL}   onRow={(record) => ({
      onClick: () => {
        this.showModal()
         var sdss=new String(record.GUPIAODAIMA)
         if(sdss.slice(0,2)=="60"){
          this.openWIns=this.openWInsss+"sh"+sdss+".gif"
         }else if(sdss.slice(0,2)=="30"){
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }else{
          this.openWIns=this.openWInsss+"sz"+sdss+".gif"
         }
         
        }
     
    })} size="small"></Table>
    <Modal
    title={"ssss"}
    centered
    
    open={this.state.visible}
    onOk={this.handleOk}
    onCancel={this.handleCancel}

    width={1000}
    
    >
      <img src={this.openWIns}></img>
    </Modal>
    </div>
    </body>
      );
    }
   
};

/* class component使用router v6  */
export default withRouter(Home);