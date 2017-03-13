var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe("Timer", () => {
  it("should exist", () => {
      expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it("should set state to started and start count", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange("started");
      expect(timer.state.timerStatus).toBe("started");
      expect(timer.state.seconds).toBe(0);

      setTimeout(() => {
        expect(timer.state.seconds).toBe(2);
        done();
      }, 2000)
    });

    it("should paused timer on paused status", (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.setState({seconds:10});
        timer.handleStatusChange('paused');

        setTimeout(() => {
          expect(timer.state.seconds).toBe(10);
          expect(timer.state.timerStatus).toBe("paused");
          done();
        }, 1001);
      });

      it("should stopped timer on stopped status", (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.setState({seconds:10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => {
          expect(timer.state.timerStatus).toBe("stopped");
          expect(timer.state.seconds).toBe(0);
          done();
        }, 1001);
      });
  });
});
