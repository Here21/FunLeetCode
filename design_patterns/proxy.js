/**
 * 代理模式
 * 特点：代理是为了控制对对象的访问，不让外部直接访问到对象。
 * 实例：缓存代理，图片懒加载，合并请求
 * 与ES6中Proxy不同
 */

<ul id="ul">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
<script>
    let ul = document.querySelector('#ul')
    ul.addEventListener('click', (event) => {
        console.log(event.target);
    })
</script>
