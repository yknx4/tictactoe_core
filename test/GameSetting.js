/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import GameSetting from '../lib/GameSetting'

describe('GameSetting class', function() {
  describe('#constructor', function() {
    it('constructor() - set default number of players', function() {
      let gameSetting = new GameSetting()
      test
      .number(gameSetting.numberOfPlayers)
      .is(2)
    })

    it('constructor() - set default fields to win count', function() {
      let gameSetting = new GameSetting()
      test
      .number(gameSetting.fieldsToWin)
      .is(3)
    })

    it('setFieldsToWin(4) - throw and error when fields to win is outside board boundaries', function() {
      let createWrongGameSetting = function() {
        new GameSetting().setFieldsToWin(4)
      }
      test
      .exception(createWrongGameSetting)
      .is(new RangeError(`Fields to win should not be bigger than Board's max dimension`))
    })

    it('setNumberOfPlayers(5) - set number of players to 5', function() {
      let gameSetting = new GameSetting().setNumberOfPlayers(5)
      test
      .number(gameSetting.numberOfPlayers)
      .is(5)
    })

    it('setFieldsToWin(2) - set fields to win to 2', function() {
      let gameSetting = new GameSetting().setFieldsToWin(2)
      test
      .number(gameSetting.fieldsToWin)
      .is(2)
    })
  })
})
