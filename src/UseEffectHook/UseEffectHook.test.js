import { useCounter } from './CounterHook';
import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

afterEach(cleanup);

describe('useCounter', () => {
  it('increcrements counter when increment is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('decrements counter when increment is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
