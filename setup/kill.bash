#!/bin/bash

ps ax | grep "sudo \+nohup \+node" | xargs echo | cut -f 1 -d " " | xargs sudo kill