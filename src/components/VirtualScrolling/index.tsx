import React, { CSSProperties, FC, useState } from "react";

export const VirtualScrolling: FC<{
  containerHeight: number;
  itemCount: number;
  itemHeight: number;
  style?: CSSProperties;
}> = (props) => {
  const { containerHeight, itemCount, itemHeight, style } = props; // 容器高度，列表数量，列表项高度
  const [scrollTop, setScrollTop] = useState(0);
  const items = [];
  // 渲染列表第一个index
  let startIdx = Math.floor(scrollTop / itemHeight);
  // 渲染列表最后一个index
  let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);
  // 在可视区外缓存列表项数量
  const paddingCount = 2;
  startIdx = Math.max(startIdx - paddingCount, 0);
  endIdx = Math.min(endIdx + paddingCount, itemCount - 1);

  for (let i = startIdx; i <= endIdx; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight }} />);
  }
  const top = startIdx * itemHeight;
  const contentHeight = itemHeight * itemCount;

  return (
    <div
      style={{
        margin: "20px auto",
        padding: 12,
        width: "80%",
        backgroundColor: "#f6f7f9",
        borderRadius: 6
      }}
    >
      <div
        style={{ height: containerHeight, overflow: "auto" }}
        onScroll={(e: any) => {
          // 处理渲染有导致的白屏问题
          // 改为同步更新
          // flushSync(() => {

          // });
          setScrollTop(e.target.scrollTop);
        }}
      >
        <div style={{ height: contentHeight }}>
          <div style={{ height: top }}></div>
          {items}
        </div>
      </div>
    </div>
  );
};

const Component: FC<{ index: number; style: CSSProperties }> = (props) => {
  const { style, index } = props;
  return <div style={style}>Component {index} Component</div>;
};
