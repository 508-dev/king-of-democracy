const gameState = {};

addEventListener("load", main);
const appstate = {
    votes: 0,
    progress: null,
};

function incrementVote(amount) {
    appstate.votes += amount;
    progress.value = appstate.votes;

}

function decrementVote(amount) {
    appstate.votes -= amount;
    progress.value = appstate.votes;
}

function main() {
    let firstButton = createElement('button');
    firstButton.textContent = 'DM Friend and Beg for Vote';
    firstButton.onclick = () => {
        incrementVote(1);

    };

    document.getElementById('controls').appendChild(firstButton);

    let firstProgress = createElement('progress');
    firstProgress.id = 'progress';
    firstProgress.max = 100;
    firstProgress.value = 0;
    document.getElementById('progress-region').appendChild(firstProgress);
    appstate.progress = firstProgress;
}


function setPosition(position) {
    document.getElementById('position').textContent = position;
}

function createElement(elementType){
    const validElements = [
        'button',
        'li',
        'ul',
        'progress'
    ];
    if (validElements.includes(elementType)) {
        return document.createElement(elementType);
    } else {
        return '';
    }
}



const offices = {
    departmentOfBuildingsCommissioner: {
        label: 'Department of Buildings Commissioner',
        jurisdiction: 'city',
        level: 0,
    },
    departmentOfBusinessIntegrityCommissioner: {
        label: 'Department of Business Integrity Commissioner',
        jurisdiction: 'city',
        level: 0,
    },
    departmentOfCulturalAffairsCommissioner: {
        label: 'Department of Business Integrity Commissioner',
        jurisdiction: 'city',
        level: 0,
    },
    departmentOfEducation: {
        label: 'Department of Education Commissioner',
        jurisdiction: 'city',
        level: 0,
    },
    departmentOfEnvironmentalProtectionCommissioner: {
        label: 'Department of Environmental Protection Commissioner',
        jurisdiction: 'city',
        level: 0,
    },
    departmentOfRatCatching: {
        label: 'Department of Rat Catching Commissioner',
        jurisdiction: 'city',
        level: 0,
    },

    cityComptroller: {
        label: 'Comptroller',
        jurisdiction: 'city',
        level: 1,

    },
    cityCouncilMember: {
        label: 'City Council Member',
        jurisdiction: 'city',
        level: 1,
    },
    cityDistrictAttorney: {
        label: 'District Attorney',
        jurisdiction: 'city',
        level: 1,
    },
    taxCommissioner: {
        label: 'Tax Commissioner',
        jurisdiction: 'state',
        level: 1,
    },
    mineInspector: {
        label: 'Mine Inspector',
        jurisdiction: 'state',
        level: 1,
    },
    laborCommissioner: {
        label: 'Labor Commissioner',
        jurisdiction: 'state',
        level: 1,
    },
    landCommissioner: {
        label: 'Land Commissioner',
        jurisdiction: 'state',
        level: 1,
    },
    insuranceCommissioner: {
        label: 'Insurance Commissioner',
        jurisdiction: 'state',
        level: 1,
    },
    agriculturalCommissioner: {
        label: 'Agricultural Commissioner',
        jurisdiction: 'state',
        level: 1,
    },
    superintendentPublicInstruction: {
        label: 'Superintendent Public Instruction',
        jurisdiction: 'state',
        level: 1,
    },
    auditor: {
        label: 'Auditor',
        jurisdiction: 'state',
        level: 2,
    },
    treasurer: {
        label: 'Treasurer',
        jurisdiction: 'state',
        level: 2,
    },
    attorneyGeneral: {
        label: 'Attorney General',
        jurisdiction: 'state',
        level: 2,
    },
    secretaryStateState: {
        label: 'Secretary of State',
        jurisdiction: 'state',
        level: 2,
    },
    lieutenantGovernor: {
        label: 'Lieutenant Governor',
        jurisdiction: 'state',
        level: 2,
    },
    governor: {
        label: 'Governor',
        jurisdiction: 'state',
        level: 3,
    },
    stateSenator: {
        label: 'Senator',
        jurisdiction: 'state',
        level: 3,
    },
    congressPerson: {
        label: 'Congressperson',
        jurisdiction: 'federal',
        level: 1,
    },
    senator: {
        label: 'Senator',
        jurisdiction: 'federal',
        level: 2,
    },
    president: {
        label: 'President',
        jurisdiction: 'federal',
        level: 3,
    },
};
