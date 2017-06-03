
    var app=angular.module('shopping',[]);
    app.controller('mainCtrl',['$scope',function($scope){
        $scope.goods=[
            {id:1001,name:'加湿器',price:'149.0',img:"images/TB1gq40NFXXXXavXFXXXXXXXXXX_!!2-item_pic.png_400x400q60.jpg"},
            {id:1002,name:'冰箱',price:'5149.0',img:"images/TB2lckWXo5O.eBjSZFxXXaaJFXa_!!1770526498.png_240x240q95.jpg"},
            {id:1003,name:'洗衣机',price:'1169.0',img:"images/TB1b9kOKFXXXXcgXpXXCiCy9FXX_043658.jpg_b.jpg"},
            {id:1004,name:'空调',price:'2199.0',img:"images/TB296zZlVXXXXa_XpXXXXXXXXXX_!!1060831536.jpg_240x240q95.jpg"},
            {id:1005,name:'油烟机',price:'949.0',img:"images/TB2iqDqlVXXXXchXXXXXXXXXXXX_!!165229494.jpg_240x240q95.jpg"},
            {id:1006,name:'净水器',price:'739.0',img:"images/T1Tb.hFshcXXa8Uso9_102629.jpg_b.jpg"},
            {id:1007,name:'热水器',price:'1949.0',img:"images/TB1j02jMVXXXXbEaXXXaDQq.FXX_080430.jpg_b.jpg"},
            {id:1008,name:'电视机',price:'3449.0',img:"images/TB1KMzsKFXXXXavXVXX4rR48VXX_031605.jpg_b.jpg"}
        ];
        $scope.wares=[];
        $scope.jia=function(id){
            var tem=$scope.wares.find(function(v){
                return v.id===id
            })
            if(tem){
                tem.num+=1
            }else{
                $scope.goods.forEach(function(v,i){
                    if(v.id==id){
                        v.num=1;
                        $scope.wares.push(v);
                    }
                })
            }

        }
        $scope.jian=function(index){
            $scope.wares.splice(index,1)
        }
        $scope.update=function(){
            var t=0;
            $scope.wares.forEach(function(v){
                t+=v.price*v.num;
            })
            return t;
        }
        $scope.ge=function(){
            var t=0;
            $scope.wares.forEach(function(v){
                num=parseInt(v.num)
                t+=num;
            })
            return t;
        }
        $scope.up=function(index){
            $scope.wares[index].num+=1;
        }
        $scope.down=function(index){
            if($scope.wares[index].num>0){
                $scope.wares[index].num-=1;
            }
        }

        $('.dropdown-toggle').on('click',function(){
            $('.dropdown-menu').toggleClass('overflow');
        })

    }]);



