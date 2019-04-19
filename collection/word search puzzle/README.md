# 制作一个word search puzzle

## 思考

在做word search的题的时候，也算是第一次玩这个游戏（小时候貌似还真没玩过，只玩过数独）。就像解题一般，有正解，当然也有反推，这也算是一个反推。

代码并不是原创，在解决这个问题的时候，想去google探索一下思路，结果发现有人早在五年前就实现了这个算法并开源了。抱着学习的态度阅读了他的代码，觉得他的代码写的有些死板，于是就诞生了这个。算是个plus版本，后续刚好还要拿这个算法写个word search游戏，打算完善并丰富一下这个模块，打成npm包放出去（应该不算侵权吧）。

## 解题思路

和word search 2的感觉很像，但是要考虑的东西更多了。

word的方向问题，还有重叠问题，都需要仔细考虑。想象一个坐标系

![坐标系](http://obd9ssud2.bkt.clouddn.com/ordinate.png "坐标系")

根据字母长度，先判断是否可以在这个puzzle中放得下（横、竖、斜三个方向），还需要先排长度长的word，这样可以避免短的字符分布过散占了长word的位置。

然后就是放置word。先找一个未被占用的点。然后随机一个方向（横、竖、斜三个方向，方向原理如图所示，在特定方向上自增）。开始铺字母。如果下一个字母的位置被占用，还得判断是否是同样的字母，如果不是得从新选一个点，然后随机一个方向。

具体参考代码来的直观，这里只理一下思路。

## 提示

在坐标系布局中，只考虑x轴增的情况，是因为我把坐标系的原点定在了数组的起点。想要达到x轴反向的效果，只要把word的字母都反过来，就可以了。