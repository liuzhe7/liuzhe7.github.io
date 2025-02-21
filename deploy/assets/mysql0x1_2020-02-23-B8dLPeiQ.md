学习一个数据库，最重要的是学习它的数据模型。InnoDB的索引模型是B+树结构的，本文将从最基础的二叉树开始，循序渐进的介绍到B+树。

# 二叉树

每个节点有两个叉的数据结构。另外，如果最后一层的叶子节点都靠左排列，并且除了最后一层，其他层的节点个数都要达到最大，这种二叉树叫做完全二叉树。

<div align="center">
<img src="/full-binary-tree.png" height="40%" width="40%"></img>

> 二叉树的逻辑结构

</div>

存储一颗二叉树可以采用链式存储，父节点保存了左右子节点的指针。也可以用数组存储，通过下标把整棵树串起来。

<div align="center">
<img src="/link-binary-tree.png" height="40%" width="40%"></img>
<img src="/array-binary-tree.png" height="40%" width="40%"></img>

> 链式存储和数组存储

</div>

很显然的**如果用链式存储，由于要存储指针，需要占用额外空间。数组存储不需要这部分指针空间。**

但是**如果二叉树不是完全二叉树，那么数组里必须要留出许多占位的空间，以保证寻址正确。**

遍历一颗二叉树的时间复杂度是O(n)。

# 二叉查找树

如果一个二叉树中任意一个节点的左子节点小于这个节点，右子节点大于这个节点，那么这就是一个二叉查找树。

**中序遍历(左中右节点)二叉查找树，可以输出有序序列，时间复杂度是O(n)，这就是二叉树排序。**

## 查找

查找操作可以从根节点开始查找。

- 当前节点等于要找的值就直接返回
- 当前节点小于要找的值就从右子树递归查找
- 当前节点大于要找的值就从左子树递归查找

## 插入

如果要插入的数据比节点的数据大，并且节点的右子树为空，就将新数据直接插到右子节点的位置；如果不为空，就再递归遍历右子树，查找插入位置。同理，如果要插入的数据比节点数值小，并且节点的左子树为空，就将新数据插入到左子节点的位置；如果不为空，就再递归遍历左子树，查找插入位置。

## 删除

- 如果要删除的节点没有子节点，只需把它的父节点指向他的指针改为指向nil。
- 如果要删除的节点有一个子节点，只需把它的父节点指向他的指针改为指向它的这个子节点。
- 如果要删除的节点有两个子节点，我们需要找到这个节点的右子树中的最小节点，把它替换到要删除的节点上。然后再删除掉这个最小节点。

## 重复数据

上面的查找、插入、删除的例子都是基于不可重复的二叉查找树。对于重复的值有以下两种方式处理。

- 树中每个节点用支持动态扩容的数据结构存储多个数据，比如数组，链表。
- 查找或插入时，找到相同的值后继续遍历他的右子树，把这个新插入的数据当作大于这个节点的值来处理。对于删除操作，我们也需要先查找到每个要删除的节点，然后再按前面讲的删除操作的方法，依次删除。

**这种结构查找,插入，删除操作和树的高度成正比，叉数相同时，分布的越平衡，效率越高。最差时是O(n),最好时是O(logn)。**

# 红黑树

首先，红黑树也是一种二叉查找树。

二叉查找树经过不断的插入删除操作后，极端情况下会退化为链表，性能急速下降。红黑树是为了解决这一问题被发明出来的一种结构。它满足以下条件。

- 根节点是黑色的
- 叶子结点是黑色的，值为nil
- 红色节点一定是不会相邻的
- 每个节点到达其可达的所有叶子节点，路径长度都相同

<div align="center">
<img src="/red-black-tree.png" height="40%" width="40%"></img>

> 红黑树

</div>

如果把红色节点去掉后，变成只有黑色节点的黑树，整个树的高度是要低于log2n的，根据规则红树不能相邻，所以把红树加进去后，最长路径也不会超过2log2n。

**红黑树经过插入或者删除数据后，会通过自旋和颜色改变来保持自身依然满足定义，保证稳定的性能。具体实现方法是比较复杂的，如果你对算法有兴趣，可以去看看具体实现。对于实际工作中，当你的业务需要一个稳定的数据结构，你能考虑到红黑树是最重要的。**

# B+树

红黑树已经是一个非常高效的数据结构了，但是mysql的索引没有选择红黑树，而是使用了B+树。

主要原因就是数据库的数据量往往是很大的，为了节约内存索引总是存储在磁盘上。**假设每次磁盘IO都能读取所有子节点，那么一次查找操作需磁盘IO的次数等于树的深度，这个时候红黑树就有可能太深了。**

很明显的是，树的叉越多，树的深度就越低，这是一个减少磁盘io的思路。但是**叉的数量过多的话，一次io操作可能无法读取所有子节点，通常操作系统一次io从磁盘读取4kb数据，所以我们需要找到一个适当的叉数。**

**B+树就是这样一个m叉树，m不会太小导致树很深，又不会太大导致多次io才能读取一个节点的所有子节点。**

在插入和删除数据后，B+树会合并或者分裂节点，保证m的稳定。

**同时B+树的叶子节点全部通过双向链表串联起来了，对于大于或者小于这种范围查找，可以在找到边缘节点后，顺着链表的指针拿到所有数据。**

还有其他特性总结如下

- 每个节点的子节点不能超过m，也不能小于m/2
- 根节点的子节点可以不超过m/2
- 只存储索引，不存储真正的数据
- 双向链遍串联叶子节点，方便区间查找
- 根节点储存在内存中，其他节点在磁盘中

# 索引

InnoDB引擎使用的索引模型是B+树模型，每个索引对应一个B+树，其中主键索引的叶子结点存储的是整行数据，非主键索引叶子存储的是主键的值，所以**采用非主键索引查询时，需要回到主键索引再查一次，术语叫做回表。**

**避免回表有以下方式**

- 使用主键索引，因为主键索引的叶子结点上有所数据
- 使用非主键索引查询主键，因为非主键索引的叶子节点上存储的主键
- 用A字段查B字段，且AB都不是主键时，建立AB联合索引

根据上面对B+树模型的介绍，所有叶子结点是被一个双向链表串起来的，并且是有序的。所以在插入新的值的时候，必须要做一定的挪动操作来维持这种有序结构。并且**由于B+树为了保证一次io就能读取某个节点的所有子节点，所以如果这个插入操作有可能造成某个节点的子节点过多，InnoDB还会申请一个新的页，把一部分子节点挪到新页里，这个过程叫做叶分裂。叶分裂不仅会降低性能，还会浪费存储空间（刚分裂完的两个页只分别使用了一半）。**删除操作同样会导致某个页的使用率下降，当低于一半时，两个数据页会合并为1个，页合并的过程也会影响性能。

**使用自增ID作为索引，每次新增都是在树的最右边插入数据，就不会有页分裂发生。**

**使用逻辑删除，可以避免页合并发生。**

**由于非主键索引叶子结点存储的是主键，索引主键长度会影响这个表的所有索引，所以主键短一点能节约很多存储空间。**

## 空间回收

除了叶分裂和页合并会造成空洞，导致空间浪费，实际mysql上删除数据也只是标记被删除的位置可以被服用，空间并没有被真正释放。

**命令 alter table A engine=InnoDB 可以重建表去除这些空洞回收空间，mysql5.6以上支持了online DDl，直接使用命令重建就可以。如果表很大，这个操作很消耗IO和CPU资源，可以使用GitHub 开源的 gh-ost 来做。**

## 最左前缀与前缀索引

B+树这种结构可以利用最左前缀来定位记录，采用模糊查找时，最左边匹配上就可以定位到，因此这种查找也可以走索引。

所以**在建立联合索引时，作为查询条件的字段应该放在前面。**

**对于单独的索引，首先基于索引排序，其次基于其他键的出现顺序进行排序。** 详细可查阅[官方文档](https://dev.mysql.com/doc/refman/8.0/en/index-extensions.html)

对于长字符串类型，如果我们对它进行索引构建，那么是相当消耗存储空间的。实际上mysql是支持字符串的前缀作为索引的。

```sql
alter table T add index p(email(6));
```

这里的索引p是使用email的前6个字节作为索引，很明显的这样做的好处是节约了存储空间，但是会带来两个问题。

- 索引的区分度降低了，因为不同的邮箱可能拥有相同的前缀，这通常会导致需要读取多条数据进行判断才能确认哪条数据是我想要的。
- 无法使用覆盖索引了，因为索引的值只是某个字段的一部分，必须回表才能拿到完整数据。

对于第一个问题，我们可以去**统计前n个字节的区分度，找到一个区分度与存储占用的平衡。**

```sql
select count(distinct left(email,4)）as L4, count(distinct left(email,5)）as L5, count(distinct left(email,6)）as L6, count(distinct left(email,7)）as L7,from T;
```

这条sql可以找到前4-7个字节不同的行数，一般超过95%就会有不错的性能了。

**如果前缀区分度很低，后缀区分度高，那么我们可以倒叙存储这个字段，查询的时候用倒叙的值查就可以了。**

```sql
select field_list from t where id_card = reverse('input_id_card_string');
```

还有一种方式是**使用hash字段，对hash字段建索引代替原值索引，但是不同的原值可能会有相同的hash值，所以还有判断原值是否相同。**

**需要注意的是，倒叙与hash的方式，是无法使用范围查询的，因为叶子节点的双向链表并不是正常的增序了。**

## change buffer 与索引

当对数据库进行写操作时，并不是直接更新到数据库磁盘的因为那样会涉及到磁盘的随机io，速度比较慢。而是通过写内存，和持久化到redo log来代替。其中写内存对应的就是写change buffer。

**把更新操作更新到change buffer后，再记录到redo log操作就完成了，mysql会在适当的时机把写操作同步到数据库磁盘。**

**当使用唯一索引时，数据库必须要保证唯一性，所以必须得把数据从磁盘读出来进行唯一性判断，因此无法简单粗暴的写完change buffer就不管了，只有普通索引才能使用这一特性。**

## 索引的选择

大部分时候一个表有多个索引，我们在使用sql语句时，通常不会指定用那个索引，而是mysql自行判断。但是某些时候mysql会选择错误，导致性能下降。

mysql的优化器会根据扫描行数，是否使用临时表，是否排序等因素综合判断使用哪个索引。

通过 explain 命令可以查看优化器优化后的结果，其中包括选择哪个索引，扫描多少行。其中**扫描多少行是根据采样信息估算出来的，如果有明显错误可以通过命令nanlyze table t 来修正。**

**对于选择错误索引的sql，可以通过force index(i)来强制使用正确的索引。**

## 索引失效

```sql
select count(*) from tradelog where month(t_modified)=7;
```

对于上面的sql语句，如果t_modified上有索引，我们期望是能够使用这个索引快速定位的。但是实际上该查询会扫描索引的全部节点。因为**索引树上叶子结点是保证了原值有序，mysql会认为经过计算后的值是无序的，所以想要使用索引就不要对字段进行计算。**

# 总结

- 非主键索引的叶子结点存储的是主键，用非主键索引查询主键之外的字段会回表
- 用A字段查B字段，且AB都不是主键时，建立AB联合索引，可以避免回表
- 使用自增ID作为索引，每次新增都是在树的最右边插入数据，就不会有页分裂发生
- 使用逻辑删除，可以避免页合并
- 由于非主键索引叶子结点存储的是主键，索引主键长度会影响这个表的所有索引，所以主键短一点能节约很多存储空间
- 在建立联合索引时，作为查询条件的字段应该放在前面
- 对长字符串字段取前n个字节建索引，保证前n个字节有95%以上的区分度，可以在性能影响较小的前提下节约存储空间
- 字符串前缀区分度低后缀区分度高可以倒叙存储
- 使用额外的hash字段作为长字符串的hash值字段，对该字段建索引节约存储空间，但是因为hash冲突还是需要判断原值
- 倒叙与hash的方式，是无法使用范围查询的，因为叶子节点的双向链表并不是正常的增序了
- 由于mysql统计错误造成的索引选择错误，通过命令analyze table t 解决
- 对于选择错误索引的sql，可以通过force index(i)来强制使用正确的索引
- 命令 alter table A engine=InnoDB 可以重建表去除这些空洞回收空间，mysql5.6以上支持了online DDl，直接使用命令重建就可以。如果表很大，这个操作很消耗IO和CPU资源，可以使用GitHub 开源的 gh-ost 来做
- 索引树上叶子结点是保证了原值有序，mysql会认为经过计算后的值是无序的，所以想要使用索引就不要对字段进行计算
