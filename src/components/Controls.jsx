import React from "react";
import { useDispatch } from "react-redux";
import { calcActions } from "../store/calc_store";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="row w-100 mt-3 ">
        <div className="col-3 ">
          <button className="btn w-100 btn-primary">%</button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.clear())}
            className="btn w-100 btn-primary"
          >
            C
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.backspace())}
            className="btn w-100 btn-primary"
          >
            X
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.devide())}
            className="btn w-100 btn-primary"
          >
            /
          </button>
        </div>
      </div>

      <div className="row w-100 mt-3 ">
        <div className="col-3 ">
          <button
            onClick={() => dispatch(calcActions.seven())}
            className="btn w-100 btn-primary"
          >
            7
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.eight())}
            className="btn w-100 btn-primary"
          >
            8
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.nine())}
            className="btn w-100 btn-primary"
          >
            9
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.multiplication())}
            className="btn w-100 btn-primary"
          >
            x
          </button>
        </div>
      </div>

      <div className="row w-100 mt-3 ">
        <div className="col-3 ">
          <button
            onClick={() => dispatch(calcActions.four())}
            className="btn w-100 btn-primary"
          >
            4
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.five())}
            className="btn w-100 btn-primary"
          >
            5
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.six())}
            className="btn w-100 btn-primary"
          >
            6
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.minus())}
            className="btn w-100 btn-primary"
          >
            -
          </button>
        </div>
      </div>

      <div className="row w-100 mt-3 ">
        <div className="col-3 ">
          <button
            onClick={() => dispatch(calcActions.one())}
            className="btn w-100 btn-primary"
          >
            1
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.two())}
            className="btn w-100 btn-primary"
          >
            2
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.three())}
            className="btn w-100 btn-primary"
          >
            3
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.plus())}
            className="btn w-100 btn-primary"
          >
            +
          </button>
        </div>
      </div>

      <div className="row w-100 mt-3 ">
        <div className="col-3 ">
          <button
            onClick={() => dispatch(calcActions.square())}
            className="btn w-100 btn-primary"
          >
            Square
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.zero())}
            className="btn w-100 btn-primary"
          >
            0
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.point())}
            className="btn w-100 btn-primary"
          >
            .
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(calcActions.evaluate())}
            className="btn w-100 btn-success"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
