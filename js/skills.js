var skill_slot = '<div>\
    <div class="col-md-8">\
        <h4 class="skill_label"></h4>\
    </div>\
    <div class="col-md-4">\
        <input class="rating rating-loading skill_value" data-size="xs">\
    </div>\
</div>';





function add_skill_slot(category, number, skill, value) {
    truc = $('#'+category);
    elem = $.parseHTML(skill_slot);
    $(elem).attr('id', category+'_'+number);
    $(elem).find(".skill_label").html(skill);
    $(elem).find(".skill_value").attr("value", value);

    $('#'+category).append(elem);
}



function append_skills(skills_data) {
    for (const skill_group of skills_data) {
        category = skill_group['category'];

        var skill_index = 0;
        for(const skill_item of skill_group['skill_list']) {
            add_skill_slot(category,
                           skill_index,
                           skill_item['skill'],
                           skill_item['score']);
            skill_index++;
        }
    }
}
