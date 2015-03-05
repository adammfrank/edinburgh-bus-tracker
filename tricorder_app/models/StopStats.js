var mongoose = require('mongoose'),
    schema = mongoose.Schema;
var StopStatsSchema = new mongoose.Schema({
    stop_id: {type: schema.Types.ObjectId, ref: 'Stop'},
    early_5_plus: Number,
    early_4: Number,
    early_3: Number,
    early_2: Number,
    on_time: Number,
    late_2: Number,
    late_3: Number,
    late_4: Number,
    late_5_plus: Number,
    total_count: Number,
    modified: {type: Boolean, index: true}

});

mongoose.model('StopStat', StopStatsSchema);