import React, { useState, useRef, useEffect } from "react";
// 自定义防抖的hooks
function useDebounce(fn, wait = 1000, deps = []) {
  let timeout = useRef(); // {} 为了保证是同一个变量
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fn();
    }, wait);
  }, deps);
}
function fn() {}
export default useDebounce;
